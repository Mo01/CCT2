$(function () {
  // PTZ Drivers array
  let PtzDrivers = [`AD Pelco P`, `AD ASCII Continuous `, `AD ASCII Make/Break`, `Philips Biphase`, `Canon VC-C4`, `Ultrak KD6 (Diamond)`, `Kalatel`, `Panasonic WV-CS850 Conv`, `Panasonic WV-CS850 New`, `Pelco ASCII`, `Pelco D`, `Pelco P`,
    `RVision`, `SAE`, `Sensormatic`, `Sony`, `VCL`, `Vicon`, `Vicon Extended`, `ACTi Pelco-P IP`, `ACTi HTTP IP`, `ACTi Pelco-D IP`, `AD Illustra IP`, `AD IP`, `Axis V2 IP`, `Axis V2 IP (Firmware 4.40)`, `Bosch BiCom IP`, `Bosch OSRD IP`, `Bosch Pelco-D IP`,
    `Brickcom IP`, `Canon IP`, `Cisco IP (v.1.0)`, `Digital`, `Generic-D IP`, `Hikvision Speed Dome IP`, `Mobotix IP`, `Panasonic IP`, `Pelco IP`, `Pelco API`, `Samsung IP`, `Sentry360 IP`, `Sony IP-Continuous Move`, `Sony IP-Move`, `Sony VISCA IP`, `Speco IP`, `Symmetry ENVS IP`,
    `Symmetry IP`, `Toshiba IK-WB21A IP`, `Toshiba IK-WB IP`, `Vivotek IP`, `Nexus(DLTV) IP`, `Nexus(IR) IP`, `FLIR IP`, `Dahua IP`, `Samsung`, `VMS Remote PTZ`, `Samsung IP (v2)`];
  //  Dewarping drivers
  let lensType = [`Acti`, `Axis`, `Bosch`, `HikVision`, `ImmerVision`, `Oncam`, `Samsung`, `Sentry 360`, `Standard`, `Vivotek`];
  let lensProfile = [`A0`, `A1`, `A8`, `B0`, `B4`, `B5`, `B6`, `B7`, `B8`, `B9`, `C1`, `C3`, `C4`, `C7`, `C8`, `C9`];

  // Device type
  let deviceType = ["180° IP Camera", "270° IP Camera", "360° IP Camera", "Analog", "Audio Bridge", "Body camera", "Bullet", "Control Board", "Cube", "Dome", "Doorstation / Intercom", "DVR", "Encoder", "Fisheye", "Fixed IP Camera", "Flex lens camera", "Hybrid Camera Receiver", "Intercom", "IP Horn Speaker", "Multiple sensors", "NVR", "Panoramic IP Camera", "PTZ IP Camera", "Radar", "Spy Camera", "Thermal Bullet Camera", "Thermal PTZ", "Turrent IP Camera", "Zoom IP Camera"]


  $(".plusDriver").on("click", function (e) {
    e.preventDefault();
    $(".btnRemove").hide();
    $(".addDriver").append(`<div class="row" id="con-${i}"><div class="col-2"><label ></div><div class="col-4"><input type="text" class="form-control  drive-${i + 1}" placeholder="Driver"></div><div class="col-2"><button type="button" class="btn btn-light btnRemove" id="btnRemove${i}">X</button></div></div>`);
    $("#list1").append(`<li><a href="#" id=${i + 1}>${i + 1}</a></li>`)
    i++;

  });

  // deleting driver extra txet box
  $('body').on('click', '.btnRemove', function () {
    $(this).parent().parent().remove();
    $(`#btnRemove${i - 2}`).show();
    $(`#${i}`).remove();
    i--;

  });

  // Detect the chane  // input ==>>//
  $("#myTextBox").bind("change paste keyup select  propertychange", function () {
    alert($(this).val().trim());
  });

  //Compressions : H264
  $(".h264Check").click(function () {
    if ($(this).is(":checked")) {
      $(".h264Check").val("Yes")
      $(".urlH264Check").prop('required', true);
      $(".tcpH264").removeAttr("disabled");
      $(".udpH264").removeAttr("disabled");
      $(".audioH264").removeAttr("disabled");
      $(".gH264").removeAttr("disabled");
    } else {
      $(".h264Check").val("No")
      $(".tcpH264").attr("disabled", "disabled");
      $(".udpH264").attr("disabled", "disabled");
      $(".audioH264").attr("disabled", "disabled");
      $(".gH264").attr("disabled", "disabled");

    }
  });
  $(".tcpH264").click(function () {
    if ($(this).is(":checked")) {
      $(".tcpH264").val("Yes")
    } else {
      $(".tcpH264").val("No")
    }
  });
  $(".udpH264").click(function () {
    if ($(this).is(":checked")) {
      $(".udpH264").val("Yes")
    } else {
      $(".udpH264").val("No")
    }
  });
  $(".audioH264").click(function () {
    if ($(this).is(":checked")) {
      $(".audioH264").val("Yes")
    } else {
      $(".audioH264").val("")
    }
  });
  $(".gH264").click(function () {
    if ($(this).is(":checked")) {
      $(".gH264").val("RTSP/")
    } else {
      $(".gH264").val("")
    }
  });
  $(".urlH264Check").click(function () {
    if ($(this).is(":checked")) {
      $(".urlH264Check").val()
    } else {
      $(".urlH264Check").val("")
    }
  });

  //Compression : H265
  $(".h265Check").click(function () {
    if ($(this).is(":checked")) {
      $(".h265Check").val("Yes")
      $(".urlH265Check").prop('required', true);
      $(".tcpH265").removeAttr("disabled");
      $(".udpH265").removeAttr("disabled");
      $(".audioH265").removeAttr("disabled");
      $(".gH265").removeAttr("disabled");
    } else {
      $(".h265Check").val("No")
      $(".tcpH265").attr("disabled", "disabled");
      $(".udpH265").attr("disabled", "disabled");
      $(".audioH265").attr("disabled", "disabled");
      $(".gH265").attr("disabled", "disabled");
    }
  });
  $(".tcpH265").click(function () {
    if ($(this).is(":checked")) {
      $(".tcpH265").val("Yes")
    } else {
      $(".tcpH264").val("No")
    }
  });
  $(".udpH265").click(function () {
    if ($(this).is(":checked")) {
      $(".udpH265").val("Yes")
    } else {
      $(".udpH265").val("No")
    }
  });
  $(".audioH265").click(function () {
    if ($(this).is(":checked")) {
      $(".audioH265").val("Yes")
    } else {
      $(".audioH265").val("No")
    }
  });
  $(".gH265").click(function () {
    if ($(this).is(":checked")) {
      $(".gH265").val("RTSP/")
    } else {
      $(".gH265").val("")
    }
  });
  $(".urlH264Check").click(function () {
    if ($(this).is(":checked")) {
      $(".urlH265Check").val()
    } else {
      $(".urlH265Check").val("")
    }
  });

  //Compression : MJPEG
  $(".mjpegCheck").click(function () {
    if ($(this).is(":checked")) {
      $(".mjpegCheck").val("Yes")
      $(".urlMJPEGCheck").prop('required', true);
      $(".tcpMJPEG").removeAttr("disabled");
      $(".udpMJPEG").removeAttr("disabled");
      $(".audioMJPEG").removeAttr("disabled");
      $(".gMJPEG").removeAttr("disabled");
    } else {
      $(".mjpegCheck").val("No")
      $(".tcpMJPEG").attr("disabled", "disabled");
      $(".udpMJPEG").attr("disabled", "disabled");
      $(".audioMJPEG").attr("disabled", "disabled");
      $(".gMJPEG").attr("disabled", "disabled");
    }
  });
  $(".tcpMJPEG").click(function () {
    if ($(this).is(":checked")) {
      $(".tcpMJPEG").val("Yes")
    } else {
      $(".tcpMJPEG").val("No")
    }
  });
  $(".udpMJPEG").click(function () {
    if ($(this).is(":checked")) {
      $(".udpMJPEG").val("Yes")
    } else {
      $(".udpMJPEG").val("No")
    }
  });
  $(".audioMJPEG").click(function () {
    if ($(this).is(":checked")) {
      $(".audioMJPEG").val("Yes")
    } else {
      $(".audioMJPEG").val("No")
    }
  });
  $(".gMJPEG").click(function () {
    if ($(this).is(":checked")) {
      $(".gMJPEG").val("RTSP/")
    } else {
      $(".gMJPEG").val("")
    }
  });
  $(".urlMJPEGCheck").click(function () {
    if ($(this).is(":checked")) {
      $(".urlMJPEGCheck").val()
    } else {
      $(".urlMJPEGCheck").val("")
    }
  });

  //Compression : MPEG4
  $(".mpeg4Check").click(function () {
    if ($(this).is(":checked")) {
      $(".mpeg4Check").val("Yes")
      $(".urlMPEG4Check").prop('required', true);
      $(".tcpMPEG4").removeAttr("disabled");
      $(".udpMPEG4").removeAttr("disabled");
      $(".audioMPEG4").removeAttr("disabled");
      $(".gMPEG4").removeAttr("disabled");
    } else {
      $(".mpeg4Check").val("No")
      $(".tcpMPEG4").attr("disabled", "disabled");
      $(".udpMPEG4").attr("disabled", "disabled");
      $(".audioMPEG4").attr("disabled", "disabled");
      $(".gMPEG4").attr("disabled", "disabled");
    }
  });
  $(".tcpMPEG4").click(function () {
    if ($(this).is(":checked")) {
      $(".tcpMPEG4").val("Yes")
    } else {
      $(".tcpMPEG4").val("No")
    }
  });
  $(".udpMPEG4").click(function () {
    if ($(this).is(":checked")) {
      $(".udpMPEG4").val("Yes")
    } else {
      $(".udpMPEG4").val("No")
    }
  });
  $(".audioMPEG4").click(function () {
    if ($(this).is(":checked")) {
      $(".audioMPEG4").val("Yes")
    } else {
      $(".audioMPEG4").val("")
    }
  });
  $(".gMPEG4").click(function () {
    if ($(this).is(":checked")) {
      $(".gMPEG4").val("RTSP/")
    } else {
      $(".gMPEG4").val("")
    }
  });
  $(".urlMPEG4Check").click(function () {
    if ($(this).is(":checked")) {
      $(".urlMPEG4Check").val()
    } else {
      $(".urlMPEG4Check").val("")
    }
  });

  // FW Version 
  $(".updated").click(function () {
    if ($(this).is(":checked")) {
      $(".updated").val("Updated")
    } else {
      $(".updated").val("")
    }
  });

  //Display PTZ
  $("#ptzCV").click(function () {
    if ($(this).is(":checked")) {
      $("#ptzs").val("CV supports PTZ")
      $(".PTZ").css("display", "inline-block");
    }
  });
  $("#ptzC").click(function () {
    if ($(this).is(":checked")) {
      $("#ptzs").val("Camera supports PTZ")
      $(".PTZ").css("display", "none");
    }
  });
  $("#ptzCD").click(function () {
    if ($(this).is(":checked")) {
      $("#ptzs").val("Camera doesn't support PTZ")
      $(".PTZ").css("display", "none");
    }
  });


  //PTZ driver list
  PtzDrivers.forEach((dType) => {
    $(".ptzList").append(`<option value="${dType}">${dType}</option>`)
  });

  // PTZ supported
  $('input[name=panTilt]').click(function () {
    if (this.value == 'Pass') {
      $('#panTilts').val('Pass')
    } else if (this.value == 'Failed') {
      $('#panTilts').val('Failed')
    } else if (this.value == 'Not supported') {
      $('#panTilts').val('Not supported')
    }

  });

  $('input[name=zoom]').click(function () {
    if (this.value == 'Pass') {
      $('#zooms').val('Pass')
    } else if (this.value == 'Failed') {
      $('#zooms').val('Failed')
    } else if (this.value == 'Not supported') {
      $('#zooms').val('Not supported')
    }

  });

  $('input[name=iris]').click(function () {
    if (this.value == 'Pass') {
      $('#iriss').val('Pass')
    } else if (this.value == 'Failed') {
      $('#iriss').val('Failed')
    } else if (this.value == 'Not supported') {
      $('#iriss').val('Not supported')
    }

  });

  $('input[name=focus]').click(function () {
    if (this.value == 'Pass') {
      $('#focuss').val('Pass')
    } else if (this.value == 'Failed') {
      $('#focuss').val('Failed')
    } else if (this.value == 'Not supported') {
      $('#focuss').val('Not supported')
    }
  })

  $('input[name=aIRIS]').click(function () {
    if (this.value == 'Pass') {
      $('#aIRISs').val('Pass')
    } else if (this.value == 'Failed') {
      $('#aIRISs').val('Failed')
    } else if (this.value == 'Not supported') {
      $('#aIRISs').val('Not supported')
    }
  })

  $('input[name=aFocus]').click(function () {
    if (this.value == 'Pass') {
      $('#aFocuss').val('Pass')
    } else if (this.value == 'Failed') {
      $('#aFocuss').val('Failed')
    } else if (this.value == 'Not supported') {
      $('#aFocuss').val('Not supported')
    }

  })

  $('input[name=ptzSpped]').click(function () {
    if (this.value == 'Pass') {
      $('#ptzSppeds').val('Pass')
    } else if (this.value == 'Failed') {
      $('#ptzSppeds').val('Failed')
    } else if (this.value == 'Not supported') {
      $('#ptzSppeds').val('Not supported')
    }
    console.log($('#ptzSppeds').val());
  })

  $('input[name=presetSet]').click(function () {
    if (this.value == 'Pass') {
      $('#presetSets').val('Pass')
    } else if (this.value == 'Failed') {
      $('#presetSets').val('Failed')
    } else if (this.value == 'Not supported') {
      $('#presetSets').val('Not supported')
    }
    console.log($('#presetSets').val());
  })

  $('input[name=presetShow]').click(function () {
    if (this.value == 'Pass') {
      $('#presetShows').val('Pass')
    } else if (this.value == 'Failed') {
      $('#presetShows').val('Failed')
    } else if (this.value == 'Not supported') {
      $('#presetShows').val('Not supported')
    }
    console.log($('#presetShows').val());
  })

  //Device type list
  deviceType.forEach((ptzD) => {
    $(".deviceType").append(`<option value="${ptzD}">${ptzD}</option>`)


  });

  // Dewarping driver list
  lensType.forEach((lensT) => {
    $(".dewarpingT").append(`<option value="${lensT}">${lensT}</option>`)
  });
  lensProfile.forEach((lensT) => {
    $(".dewarpingP").append(`<option value="${lensT}">${lensT}</option>`)
  });
  //Dewarping
  $("#dewarpingCVP").on("click", () => {
    $(".dew").css("display", "inline-block");
    $("#dewarpings").val("CV supports dewarping ")

  });
  $("#dewarpingCVF").on("click", () => {
    $(".dew").css("display", "none");
    $("#dewarpings").val("CV doesn't support dewarping");
  });
  $("#dewarpingCNS").on("click", () => {
    $(".dew").css("display", "none");
    $("#dewarpings").val("Camera doesn't support dewarping");
  });

  //Events
  $("#eventCVP").on("click", () => {
    $("#events").val("CV supports events")
  });
  $("#eventCVF").on("click", () => {
    $("#events").val("CV doesn't support events")
  });
  $("#eventCNS").on("click", () => {
    $("#events").val("Camera doesn't support events")
  });

  // Test Level
  $("#testL1").on("click", () => {
    $("#testLs").val("Level 1")
  });
  $("#testL2").on("click", () => {
    $("#testLs").val("Level 2")
  });

  // added focus function
  $('.mac1').on('input', function (event) {
    let mac = event.currentTarget.value;
    if (mac.length === 2) {
      $(".mac2").focus()
    }
  });
  $('.mac2').on('input', function (event) {
    let mac = event.currentTarget.value;
    if (mac.length === 2) {
      $(".mac3").focus()
    }
  });
  $('.mac3').on('input', function (event) {
    let mac = event.currentTarget.value;
    if (mac.length === 2) {
      $(".mac4").focus()
    }
  });
  $('.mac4').on('input', function (event) {
    let mac = event.currentTarget.value;
    if (mac.length === 2) {
      $(".mac5").focus()
    }
  });
  $('.mac5').on('input', function (event) {
    let mac = event.currentTarget.value;
    if (mac.length === 2) {
      $(".mac6").focus()
    }
  });

  $('.ip1').on('input', function (event) {
    let ip = event.currentTarget.value;
    if (ip.length === 3) {
      $(".ip2").focus()
    }
  });
  $('.ip2').on('input', function (event) {
    let ip = event.currentTarget.value;
    if (ip.length === 3) {
      $(".ip3").focus()
    }
  });
  $('.ip3').on('input', function (event) {
    let ip = event.currentTarget.value;
    if (ip.length === 3) {
      $(".ip4").focus()
    }
  });
  $('.chCount').on('input', function (event) {
    let count = event.currentTarget.value;
    if (count.length === 2) {
      $(".streamId").focus()
    }
  });


  // Driver, URL
  $(".driverH264, .driverH265, .driverMJPEG, .driverMPEG4").val("Driver: ");

  $("#checkType").click(function () {
    if ($(this).is(":checked")) {
      $(".newTypeCheck").removeAttr("disabled");
      $(".newTypeCheck").focus();
      $(".deviceTypeCheck").attr("disabled", "disabled");
      $(".deviceTypeCheck").val("");
      $(".deviceTypeValue").val("");
    } else {
      $(".newTypeCheck").attr("disabled", "disabled");
      $(".deviceTypeCheck").removeAttr("disabled");
      $(".deviceTypeCheck").focus();
      $(".newTypeCheck").val("");
    }
  });

  $(".h264Check").click(function () {
    if ($(this).is(":checked")) {
      $(".urlH264Check").removeAttr("disabled");
      $(".urlH264Check").focus();
      $(".h264Check").val("Yes");
    } else {
      $(".urlH264Check").attr("disabled", "disabled");
      $(".h264Check").val("");
    }
  });
  $(".gH264").click(function () {
    if ($(this).is(":checked")) {
      $(".driverH264").val("URL: ");
    } else {
      $(".driverH264").val("Driver: ");
    }
  });

  $(".h265Check").click(function () {
    if ($(this).is(":checked")) {
      $(".urlH265Check").removeAttr("disabled");
      $(".urlH265Check").focus();
      $(".h265Check").val("Yes");
    } else {
      $(".urlH265Check").attr("disabled", "disabled");
      $(".h265Check").val("");
    }
  });
  $(".gH265").click(function () {
    if ($(this).is(":checked")) {
      $(".driverH265").val("URL: ");
    } else {
      $(".driverH265").val("Driver: ");
    }
  });

  $(".mjpegCheck").click(function () {
    if ($(this).is(":checked")) {
      $(".urlMJPEGCheck").removeAttr("disabled");
      $(".urlMJPEGCheck").focus();
      $(".mjpegCheck").val("Yes");
    } else {
      $(".urlMJPEGCheck").attr("disabled", "disabled");
      $(".mjpegCheck").val("");
    }
  });
  $(".gMJPEG").click(function () {
    if ($(this).is(":checked")) {
      $(".driverMJPEG").val("URL: ");
    } else {
      $(".driverMJPEG").val("Driver: ");
    }
  });

  $(".mpeg4Check").click(function () {
    if ($(this).is(":checked")) {
      $(".urlMPEG4Check").removeAttr("disabled");
      $(".urlMPEG4Check").focus();
      $(".mpeg4Check").val("Yes");
    } else {
      $(".urlMPEG4Check").attr("disabled", "disabled");
      $(".mpeg4Check").val("");

    }
  });
  $(".gMPEG4").click(function () {
    if ($(this).is(":checked")) {
      $(".driverMPEG4").val("URL: ");
    } else {
      $(".driverMPEG4").val("Driver: ");
    }
  });

  $(".vWer").val("Windows " + window.navigator.appVersion.split("NT")[1].split(";")[0].trim())
  console.log($(".vWer").val())


  // PDF
  $(".submitB").on("click", () => {
    let testerName = $(".testerName").val();
    let cvVersion = $(".cvVersion").val();
    let placeholder = $(".placeholder").val();
    let manfu = $(".manfu").val();
    let model = $(".model").val();
    let ip1 = $(".ip1").val();
    let ip2 = $(".ip2").val();
    let ip3 = $(".ip3").val();
    let ip4 = $(".ip4").val();
    let mac1 = $(".mac1").val();
    let mac2 = $(".mac2").val();
    let mac3 = $(".mac3").val();
    let mac4 = $(".mac4").val();
    let mac5 = $(".mac5").val();
    let mac6 = $(".mac6").val();
    let chCount = $(".chCount ").val();
    let streamId = $(".streamId ").val();
    let uName = $(".uName ").val();
    let pWord = $(".streamId ").val();
    let fwVersion = $(".fwVersion ").val();
    let ptzs = $("#ptzs ").val();
    let dewarpings = $("#dewarpings").val();
    let events = $("#events").val();
    let testLs = $("#testLs").val();

    let m = new Date();
    let dateString = ("0" + (m.getUTCMonth() + 1)).slice(-2) + "/" + ("0" + m.getUTCDate()).slice(-2) + "/" + m.getUTCFullYear();


    if (testerName !== "" && cvVersion !== "" && placeholder !== "" && manfu !== "" && model !== "" && ip1 !== "" && ip2 !== "" && ip3 !== "" && ip4 !== "" && mac1 !== "" && mac2 !== "" && mac3 !== "" && mac4 !== "" && mac5 !== "" && mac6 !== "" && chCount !== "" && streamId !== "" && uName !== "" && pWord !== "" && fwVersion !== "" && ptzs !== "" && dewarpings !== "" && events !== "" && testLs !== "") {

      var doc = new jsPDF({
        orientation: 'portrait',
      });
      doc.rect(5, 5, 200, 290);
      doc.setFont("times");
      doc.text(170, 10, `${dateString}`);
      doc.ellipse(100, 25, 50, 13, 'S');

      doc.setFontType("bold");
      doc.setTextColor(231, 77, 61);
      doc.text(80, 20, 'Salient Systems');

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(65, 30, 'Camera Certification Template');

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 50, "Tester: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(30, 50, ` ${$(".testerName").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 60, "CV Version: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(45, 60, ` ${$(".cvVersion").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 70, "Windows Version: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(60, 70, `${$(".vWer").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 80, "Manufacturer: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(50, 80, ` ${$(".manfu").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(80, 80, "Model :");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(100, 80, ` ${$(".model").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 90, "Camera's IP: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(50, 90, `${$(".ip1").val().trim()}` + ".");
      doc.text(62, 90, `${$(".ip2").val().trim()}` + ".");
      doc.text(74, 90, `${$(".ip3").val().trim()}` + ".");
      doc.text(86, 90, `${$(".ip4").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(100, 90, "Mac Address: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(140, 90, `${$(".mac1").val().trim()}` + ":");
      doc.text(148, 90, `${$(".mac2").val().trim()}` + ":");
      doc.text(156, 90, `${$(".mac3").val().trim()}` + ":");
      doc.text(164, 90, `${$(".mac4").val().trim()}` + ":");
      doc.text(172, 90, `${$(".mac5").val().trim()}` + ":");
      doc.text(180, 90, `${$(".mac6").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 100, "Device Type: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(50, 100, ` ${$(".deviceTypeCheck").val().trim()}`);
      doc.text(50, 100, ` ${$(".newTypeCheck").val().trim()}` );

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 110, "Compressions:  ");

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(20, 120, "H264: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(40, 120, ` ${$(".h264Check").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(55, 120, `${$(".gH264").val().trim()}` + "TCP: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(85, 120, ` ${$(".tcpH264").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(100, 120, `${$(".gH264").val().trim()}` + "UDP: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(135, 120, ` ${$(".udpH264").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(150, 120, "Audio: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(170, 120, ` ${$(".audioH264").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(20, 130, `${$(".driverH264").val().trim()} `);
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(40, 130, `${$(".urlH264Check").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(20, 140, "H265: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(40, 140, ` ${$(".h265Check").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(55, 140, `${$(".gH265").val().trim()}` + "TCP: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(85, 140, ` ${$(".tcpH265").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(100, 140, `${$(".gH265").val().trim()}` + "UDP: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(135, 140, ` ${$(".udpH265").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(150, 140, "Audio: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(170, 140, `${$(".audioH265").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(20, 150, `${$(".driverH265").val().trim()} `);
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(40, 150, `${$(".urlH265Check").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(20, 160, "MJPEG: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(40, 160, ` ${$(".mjpegCheck").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(55, 160, `  ${$(".gMJPEG").val().trim()}` + "TCP: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(85, 160, ` ${$(".tcpMJPEG").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(100, 160, `${$(".gMJPEG").val().trim()}` + "UDP: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(135, 160, ` ${$(".udpMJPEG").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(150, 160, "Audio: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(170, 160, ` ${$(".audioMJPEG").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(20, 170, `${$(".driverMJPEG").val().trim()} `);
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(40, 170, `${$(".urlMJPEGCheck").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(20, 180, "MPEG4: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(40, 180, ` ${$(".mpeg4Check").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(55, 180, `${$(".gMPEG4").val().trim()}` + "TCP: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(85, 180, ` ${$(".tcpMPEG4").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(100, 180, `${$(".gMPEG4").val().trim()}` + "UDP: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(135, 180, ` ${$(".udpMPEG4").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(150, 180, "Audio: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(170, 180, ` ${$(".audioMPEG4").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(20, 190, `${$(".driverMPEG4").val().trim()} `);
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(40, 190, `${$(".urlMPEG4Check").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 200, "Channel count: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(60, 200, `${$(".chCount").val().trim()}`);
      doc.setTextColor(100)
      doc.setFontType("bold");
      doc.text(90, 200, "Stream count: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(140, 200, `${$(".streamId").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 210, "User: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(30, 210, `${$(".uName").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(70, 210, "Password: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(100, 210, `${$(".pWord").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 220, "PTZ Capable: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(50, 220, `${$("#ptzs").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(15, 230, "PTZ Driver Used: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(60, 230, `${$(".ptzDriverValue").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(135, 230, "PTZ ID Used: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(170, 230, `${$(".ptzId").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(15, 240, "Pan/Tilt Buttons: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(70, 240, `${$("#panTilts").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(110, 240, "Zoom In/Out Buttons: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(165, 240, `${$("#zooms").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(15, 250, "Iris Buttons: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(70, 250, `${$("#iriss").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(110, 250, "Auto Iris: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(165, 250, `${$("#aIRISs").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(15, 260, "Focus Buttons: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(70, 260, `${$("#focuss").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(110, 260, "Auto Focus: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(165, 260, `${$("#aFocuss").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(15, 270, "Preset Position Set: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(70, 270, `${$("#presetSets").val().trim()}`);
      doc.setTextColor(100);
      doc.setFontType("bold");
      doc.text(110, 270, "Preset Position Show:  ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(165, 270, `${$("#presetShows").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(15, 280, "PTZ Speed Adjust: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(70, 280, `${$("#ptzSppeds").val().trim()}`);



      doc.addPage();
      doc.setFont("times");
      doc.rect(5, 5, 200, 290);
      doc.text(170, 10, `${dateString}`);
      doc.ellipse(100, 25, 50, 13, 'S');

      doc.setFontType("bold");
      doc.setTextColor(231, 77, 61);
      doc.text(80, 20, 'Salient Systems');

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(65, 30, 'Camera Certification Template');

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 50, "FW Version: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(45, 50, `${$(".fwVersion").val().trim()}`);
      doc.text(70, 50, `${$(".updated").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 60, "Dewarping: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(45, 60, `${$("#dewarpings").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(50, 70, "Dewarping Driver: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(100, 70, `${$(".dewarpingT").val().trim()}`);
      doc.text(140, 70, `${$(".dewarpingP").val().trim()}`);


      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 80, "On-Camera events: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(60, 80, `${$("#events").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 90, "Testing Level: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(50, 90, `${$("#testLs").val().trim()}`);

      doc.setFontType("bold");
      doc.setTextColor(100);
      doc.text(10, 100, "Notes: ");
      doc.setFontType("normal");
      doc.setTextColor(0, 0, 0);
      doc.text(20, 110, `${$(".note").val().trim()}`);

      // Save the PDF
      doc.save(`${$(".manfu").val().trim()}` + "_" + `${$(".model").val().trim()}` + ".pdf");
    }
  })

});