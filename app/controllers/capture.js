import Whammy  from './whammy'

function parseWebP(riff){
	var VP8 = riff.RIFF[0].WEBP[0];

	var frame_start = VP8.indexOf('\x9d\x01\x2a'); //A VP8 keyframe starts with the 0x9d012a header
	for(var i = 0, c = []; i < 4; i++) c[i] = VP8.charCodeAt(frame_start + 3 + i);

	var width, horizontal_scale, height, vertical_scale, tmp;

	//the code below is literally copied verbatim from the bitstream spec
	tmp = (c[1] << 8) | c[0];
	width = tmp & 0x3FFF;
	horizontal_scale = tmp >> 14;
	tmp = (c[3] << 8) | c[2];
	height = tmp & 0x3FFF;
	vertical_scale = tmp >> 14;
	return {
		width: width,
		height: height,
		data: VP8,
		riff: riff
	}
}

function parseRIFF(string){
	var offset = 0;
	var chunks = {};

	while (offset < string.length) {
		var id = string.substr(offset, 4);
		chunks[id] = chunks[id] || [];
		if (id == 'RIFF' || id == 'LIST') {
			var len = parseInt(string.substr(offset + 4, 4).split('').map(function(i){
				var unpadded = i.charCodeAt(0).toString(2);
				return (new Array(8 - unpadded.length + 1)).join('0') + unpadded
			}).join(''),2);
			var data = string.substr(offset + 4 + 4, len);
			offset += 4 + 4 + len;
			chunks[id].push(parseRIFF(data));
		} else if (id == 'WEBP') {
			// Use (offset + 8) to skip past "VP8 "/"VP8L"/"VP8X" field after "WEBP"
			chunks[id].push(string.substr(offset + 8));
			offset = string.length;
		} else {
			// Unknown chunk type; push entire payload
			chunks[id].push(string.substr(offset + 4));
			offset = string.length;
		}
	}

	return chunks;
}


export default function(frames, ctx, fps, callback){
	const doneFrames = []

	function processFrame() {
		ctx.putImageData(frames[doneFrames.length], 0, 0)

		const webp = parseWebP(parseRIFF(atob(ctx.canvas.toDataURL('image/webp', 0.05).slice(23))))
		webp.duration = 1000 / fps

		doneFrames.push(webp)

		if (doneFrames.length === frames.length) return returnFrames(doneFrames)
		callback(false, doneFrames.length / frames.length)
		requestAnimationFrame(processFrame)
	}

	function returnFrames(frames) {
		callback(true, Whammy.toWebM(frames))
	}

	requestAnimationFrame(processFrame)
}