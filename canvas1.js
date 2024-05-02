


function loco(){
              gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()



function canvas(){
              const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  `https://neverland.agency/assets/shadow.81dd2441.webp
  https://neverland.agency/assets/0001.367fc100.webp
  https://neverland.agency/assets/0002.80d77905.webp
  https://neverland.agency/assets/0003.25c1cde6.webp
  https://neverland.agency/assets/0004.93c6875e.webp
  https://neverland.agency/assets/0005.127d2ecc.webp
  https://neverland.agency/assets/0006.87c80a0b.webp
  https://neverland.agency/assets/0007.4dc31d1a.webp
  https://neverland.agency/assets/0008.4493e07e.webp
  https://neverland.agency/assets/0009.a7073fe7.webp
  https://neverland.agency/assets/0010.45349bb8.webp
  https://neverland.agency/assets/0011.e2b60f10.webp
  https://neverland.agency/assets/0012.a693fec2.webp
  https://neverland.agency/assets/0013.3702e59d.webp
  https://neverland.agency/assets/0014.cc364c48.webp
  https://neverland.agency/assets/0015.1ffca1fc.webp
  https://neverland.agency/assets/0016.680993cf.webp
  https://neverland.agency/assets/0017.fa7a8aac.webp
  https://neverland.agency/assets/0018.9dd27e56.webp
  https://neverland.agency/assets/0019.8bbeca87.webp
  https://neverland.agency/assets/0020.c7323fb4.webp
  https://neverland.agency/assets/0021.130be017.webp
  https://neverland.agency/assets/0022.9e6d147e.webp
  https://neverland.agency/assets/0023.018dfd51.webp
  https://neverland.agency/assets/0024.074c3974.webp
  https://neverland.agency/assets/0025.c1db40e1.webp
  https://neverland.agency/assets/0026.3f076bbb.webp
  https://neverland.agency/assets/0027.2d272e1b.webp
  https://neverland.agency/assets/0028.6c1b1d5e.webp
  https://neverland.agency/assets/0029.b9fc8895.webp
  https://neverland.agency/assets/0030.794ed4f6.webp
  https://neverland.agency/assets/0031.08dd306e.webp
  https://neverland.agency/assets/0032.bc6f46df.webp
  https://neverland.agency/assets/0033.62367d5d.webp
  https://neverland.agency/assets/0034.226d4141.webp
  https://neverland.agency/assets/0035.b339b584.webp
  https://neverland.agency/assets/0036.f7c2bbbf.webp
  https://neverland.agency/assets/0037.48968860.webp
  https://neverland.agency/assets/0038.69beb14d.webp
  https://neverland.agency/assets/0039.cc935f04.webp
  https://neverland.agency/assets/0040.52ac74fe.webp
  https://neverland.agency/assets/0041.25e2bf9e.webp
  https://neverland.agency/assets/0042.fc095066.webp
  https://neverland.agency/assets/0043.91d889b4.webp
  https://neverland.agency/assets/0044.fafe14fc.webp
  https://neverland.agency/assets/0045.2a8a105b.webp
  https://neverland.agency/assets/0046.383ede44.webp
  https://neverland.agency/assets/0047.2556f05f.webp
  https://neverland.agency/assets/0048.11c80feb.webp
  https://neverland.agency/assets/0049.299df9e1.webp
  https://neverland.agency/assets/0050.bd6aac7b.webp
  https://neverland.agency/assets/0051.cfd9495a.webp
  https://neverland.agency/assets/0052.cbceeac1.webp
  https://neverland.agency/assets/0053.ac13cd89.webp
  https://neverland.agency/assets/0054.58120fca.webp
  https://neverland.agency/assets/0055.a7f81a0a.webp
  https://neverland.agency/assets/0056.95e39852.webp
  https://neverland.agency/assets/0057.5f796717.webp
  https://neverland.agency/assets/0058.c629733c.webp
  https://neverland.agency/assets/0059.198362f0.webp
  https://neverland.agency/assets/0060.4d2c4191.webp
  https://neverland.agency/assets/0061.6842f8b4.webp
  https://neverland.agency/assets/0062.7056df3c.webp
  https://neverland.agency/assets/0063.1827e130.webp
  https://neverland.agency/assets/0064.78989c9d.webp
  https://neverland.agency/assets/0065.8b3c3f83.webp
  https://neverland.agency/assets/0066.bf12bd63.webp
  https://neverland.agency/assets/0067.e5effdcf.webp
  https://neverland.agency/assets/0068.b108e254.webp
  https://neverland.agency/assets/0069.489e7b42.webp
  https://neverland.agency/assets/0070.7020391a.webp
  https://neverland.agency/assets/0071.a69115a2.webp
  https://neverland.agency/assets/0072.35ada014.webp
  https://neverland.agency/assets/0073.0f2e4d01.webp
  https://neverland.agency/assets/0074.f075277b.webp
  https://neverland.agency/assets/0075.14ecf537.webp
  https://neverland.agency/assets/0076.755d547e.webp
  https://neverland.agency/assets/0077.69cfeaf2.webp
  https://neverland.agency/assets/0078.6355955a.webp
  https://neverland.agency/assets/0079.6d761ba5.webp
  https://neverland.agency/assets/0080.f3f83675.webp
  https://neverland.agency/assets/0081.7a42c2f9.webp
  https://neverland.agency/assets/0082.38c1c234.webp
  https://neverland.agency/assets/0083.e47953db.webp
  https://neverland.agency/assets/0084.0f604c9d.webp
  https://neverland.agency/assets/0085.838ba0eb.webp
  https://neverland.agency/assets/0086.fb797f9c.webp
  https://neverland.agency/assets/0087.583abb88.webp
  https://neverland.agency/assets/0088.8eddc667.webp
  https://neverland.agency/assets/0089.1b9f5e24.webp
  https://neverland.agency/assets/0090.d509050c.webp
  https://neverland.agency/assets/0091.cd291f1a.webp
  https://neverland.agency/assets/0092.4d10b5c1.webp
  https://neverland.agency/assets/0093.f71c2ef9.webp
  https://neverland.agency/assets/0094.10cce7eb.webp
  https://neverland.agency/assets/0095.f222f726.webp
  https://neverland.agency/assets/0096.3f390525.webp
  https://neverland.agency/assets/0097.3356dd83.webp
  https://neverland.agency/assets/0098.051d1c2f.webp
  https://neverland.agency/assets/0099.e582e464.webp
  https://neverland.agency/assets/0100.5c1bbf8a.webp
  https://neverland.agency/assets/0101.f9dc6cdc.webp
  https://neverland.agency/assets/0102.9cc2351d.webp
  https://neverland.agency/assets/0103.038c41d5.webp
  https://neverland.agency/assets/0104.8b5b1ec9.webp
  https://neverland.agency/assets/0105.95022e13.webp
  https://neverland.agency/assets/0106.fc5b4a76.webp
  https://neverland.agency/assets/0107.add13275.webp
  https://neverland.agency/assets/0108.d0437737.webp
  https://neverland.agency/assets/0109.2f8d6140.webp
  https://neverland.agency/assets/0110.cb4c79c4.webp
  https://neverland.agency/assets/0111.3fb7de98.webp
  https://neverland.agency/assets/0112.84356816.webp
  https://neverland.agency/assets/0113.a3cd0aa6.webp
  https://neverland.agency/assets/0114.e82280ae.webp
  https://neverland.agency/assets/0115.37b107d7.webp
  https://neverland.agency/assets/0116.758a19d6.webp
  https://neverland.agency/assets/0117.a504cc43.webp
  https://neverland.agency/assets/0118.6c60e88a.webp
  https://neverland.agency/assets/0119.75662e69.webp
  https://neverland.agency/assets/0120.b09a3fb5.webp
  https://neverland.agency/assets/0121.a3232430.webp
  https://neverland.agency/assets/0122.3857c291.webp
  https://neverland.agency/assets/0123.63ec68e6.webp
  https://neverland.agency/assets/0124.dd380aae.webp
  https://neverland.agency/assets/0125.e224f72d.webp
  https://neverland.agency/assets/0126.3fc8c7d7.webp
  https://neverland.agency/assets/0127.dff2fa12.webp
  https://neverland.agency/assets/0128.40839700.webp
  https://neverland.agency/assets/0129.ec6fbf2d.webp
  https://neverland.agency/assets/0130.dafff240.webp
  https://neverland.agency/assets/0131.bb5879bf.webp
  https://neverland.agency/assets/0132.04e4fcb3.webp
  https://neverland.agency/assets/0133.b0443171.webp
  https://neverland.agency/assets/0134.6ef1a397.webp
  https://neverland.agency/assets/0135.b2fb92e9.webp
  https://neverland.agency/assets/0136.47c8bcc8.webp
  https://neverland.agency/assets/0137.a86ac0d2.webp
  https://neverland.agency/assets/0138.54107e24.webp
  https://neverland.agency/assets/0139.6bc8b405.webp
  https://neverland.agency/assets/0140.216553f9.webp
  https://neverland.agency/assets/0141.e67736c4.webp
  https://neverland.agency/assets/0142.8f993d18.webp
  https://neverland.agency/assets/0143.8a85c8db.webp
  https://neverland.agency/assets/0144.120009b3.webp
  https://neverland.agency/assets/0145.406dc12e.webp
  https://neverland.agency/assets/0146.674795de.webp
  https://neverland.agency/assets/0147.04743015.webp
  https://neverland.agency/assets/0148.c41f7238.webp
  https://neverland.agency/assets/0149.9273b695.webp
  https://neverland.agency/assets/0150.b2f51028.webp
  https://neverland.agency/assets/0151.3fd41bbd.webp
  https://neverland.agency/assets/0152.ebab67b9.webp
  https://neverland.agency/assets/0153.4a7efd29.webp
  https://neverland.agency/assets/0154.74b109ce.webp
  https://neverland.agency/assets/0155.e83b734f.webp
  https://neverland.agency/assets/0156.715fd060.webp
  https://neverland.agency/assets/0157.63f577a6.webp
  https://neverland.agency/assets/0158.3a6a38fe.webp
  https://neverland.agency/assets/0159.dba24ee0.webp
  https://neverland.agency/assets/0160.9ed7d5eb.webp
  https://neverland.agency/assets/0161.bcb7d56a.webp
  https://neverland.agency/assets/0162.84f5e906.webp
  https://neverland.agency/assets/0163.a02d519b.webp
  https://neverland.agency/assets/0164.d4ea5338.webp
  https://neverland.agency/assets/0165.e5238943.webp
  https://neverland.agency/assets/0166.92545af3.webp
  https://neverland.agency/assets/0167.64a9c12f.webp
  https://neverland.agency/assets/0168.a9c920d2.webp
  https://neverland.agency/assets/0169.ba674b80.webp
  https://neverland.agency/assets/0170.f153d26c.webp
  https://neverland.agency/assets/0171.20870533.webp
  https://neverland.agency/assets/0172.9cdc7bd8.webp
  https://neverland.agency/assets/0173.f3d803c4.webp
  https://neverland.agency/assets/0174.d2c5a77f.webp
  https://neverland.agency/assets/0175.ce7689ec.webp
  https://neverland.agency/assets/0176.c64487d6.webp
  https://neverland.agency/assets/0177.7bcdce0a.webp
  https://neverland.agency/assets/0178.2b2867de.webp
  https://neverland.agency/assets/0179.66a02840.webp
  https://neverland.agency/assets/0180.232100cc.webp
  `
 ;
  return data.split("\n")[index];
}

const frameCount = 181;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#main`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page1",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas()