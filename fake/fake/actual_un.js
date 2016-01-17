$(function() {
    $("#battery-slider").slider({
        range: "min",
        value: 50,
        min: 1,
        max: 100,
        slide: function(event, ui) {
            $("#battery-slider-amount").val(ui.value + "%");
            $("#battery-percent-number").text(ui.value);
            $("#battery-percent").width(ui.value + "%");
            if (ui.value <= 20) {
                $("#battery-percent").addClass('red')
            } else {
                $("#battery-percent").removeClass('red')
            }
        }
    });
    $("#battery-slider-amount").val($("#battery-slider").slider("value") + "%");
    $("#wifi-slider").slider({
        range: "min",
        value: 3,
        min: 0,
        max: 3,
        slide: function(event, ui) {
            $("#wifi").attr('src', 'fake/wifi-' + ui.value + '.png');
            $("#wifi").attr('src', 'fake/wifi-' + ui.value + '.png');
            $("#connection-type-wifi").attr('src', 'fake/wifi-' + ui.value + '.png');
            $('input:radio[name=connectionType][value=wifi]').click()
        }
    });
    $("#connection-slider").slider({
        range: "min",
        value: 3,
        min: 0,
        max: 5,
        slide: function(event, ui) {
            $("#connection").attr('src', 'fake/3g-' + ui.value + '.png');
            $("#signal-img").attr('src', 'fake/3g-' + ui.value + '.png')
        }
    });
    $('#battery-show-percent').click(function() {
        if ($(this).is(':checked')) {
            $("#battery-percent-number-container").fadeIn(250)
        } else {
            $("#battery-percent-number-container").fadeOut(250)
        }
    });
    $('#msgs').on('click', '.delete', function() {
        $(this).parent('li').fadeOut(500, function() {
            $(this).remove()
        })
    });
    $(function() {
        $("#msgs").sortable({
            start: function(event, ui) {
                $('#msgs').addClass('dragging');
                $('.delete').remove()
            },
            stop: function(event, ui) {
                $('#msgs').removeClass('dragging')
            }
        });
        $("#msgs").disableSelection()
    });
    $(".inputVal").each(function() {
        $("#" + $(this).attr('id') + "-result").text($(this).val())
    });
    $(".inputVal").keyup(function(e) {
        $("#" + $(this).attr('id') + "-result").text($(this).val());
        if ($(this).attr('id') == 'name' && $(this).val().length > 14 && $(this).val().length <= 20) {
            $("#txt-name").addClass('active')
        } else if ($(this).attr('id') == 'name' && $(this).val().length > 20 && $("#txt-name").hasClass('active')) {
            $("#txt-name").addClass('active');
            $("#name-result").text($("#name-result").text().substr(0, 24) + '...')
        } else {
            $("#txt-name").removeClass('active')
        }
    });
    $('.sendMessage').click(function() {
        var $color = 'msg ' + $("input[name=sender]:checked").val();
        var $msg = $("#msg-content").val();
        if ($("input[name=sender]:checked").val() == 'transparent') {
            var $color = 'msg-timestamp'
        }
        if ($msg) {
            var newItem = $('<li class="' + $color + '"><div class="delete" style="display:none;"><i class="fa fa-trash-o"></i></div><div class="content"><p>' + $msg + '</p></div><div class="sep"></div></li>');
            $("#dlbtn").fadeIn(500);
            if ($('#example-msg').length > 0) {
                $("#example-msg").fadeOut(250, function() {
                    var newItem2 = $('<li class="msg-timestamp"><div class="delete" style="display:none;"><i class="fa fa-trash-o"></i></div><div class="content"><p>Today 8:32 AM</p></div><div class="sep"></div></li>');
                    $("#example-msg").remove();
                    $("#msgs").append(newItem2);
                    $("#msgs").append(newItem);
                    $w = newItem.width();
                    $h = newItem.height();
                    $ot = newItem.offset().top;
                    $ol = newItem.offset().left;
                    newItem.css('top', $ot + 'px').css('left', $ol + 'px').css('width', $w + 'px');
                    $w2 = newItem2.width();
                    $h2 = newItem2.height();
                    $ot2 = newItem2.offset().top;
                    $ol2 = newItem2.offset().left;
                    newItem2.css('top', $ot2 + 'px').css('left', $ol2 + 'px').css('width', $w2 + 'px');
                    $("#msgs").animate({
                        scrollTop: $('#msgs-wrapper').height()
                    }, 1000)
                });
                $(".example-msg").fadeOut(250)
            } else {
                $("#msgs").append(newItem);
                $w = newItem.width();
                $h = newItem.height();
                $ot = newItem.offset().top;
                $ol = newItem.offset().left;
                newItem.css('top', $ot + 'px').css('left', $ol + 'px').css('width', $w + 'px');
                $("#msgs").animate({
                    scrollTop: $('#msgs-wrapper').height()
                }, 1000)
            }
            $("#msg").val('')
        }
    });
    $('input:radio[name=expandIphone]').click(function() {
        var $option = $(this).val();
        if ($option == 'true') {
            $("#msgs").removeClass('fixed');
            $("#msgs").animate({
                scrollTop: $('#msgs').height()
            }, 1000)
        } else {
            $("#msgs").addClass('fixed')
        }
    });
    $('input:radio[name=connectionType]').click(function() {
        var $option = $(this).val();
        if ($option == 'wifi') {
            $(".connection-slider-wifi").fadeTo(250, 1);
            $("#connection-type").fadeIn(250);
            $("#connection-type-3g").fadeOut(100);
            $("#connection-type-4g").fadeOut(100, function() {
                $("#connection-type-wifi-wrapper").fadeIn(200)
            })
        } else if ($option == '3g') {
            $("#connection-type").fadeIn(250);
            $("#connection-type-wifi-wrapper").fadeOut(100);
            $("#connection-type-4g").fadeOut(100, function() {
                $("#connection-type-3g").fadeIn(200)
            })
        } else if ($option == '4g') {
            $("#connection-type").fadeIn(250);
            $("#connection-type-3g").fadeOut(100);
            $("#connection-type-wifi-wrapper").fadeOut(100, function() {
                $("#connection-type-4g").fadeIn(200)
            })
        } else if ($option == 'empty') {
            $("#connection-type").fadeOut(250)
        }
    });
    $('ul#msgs').on('mouseenter', 'li', function() {
 
        if (!$('#msgs').hasClass('dragging')) {
          
            $w = $(this).width();
            $h = $(this).height();
            $ot = $(this).offset().top;
            $ol = $(this).offset().left;
            $(this).append('<div style="top:' + $ot + 'px;left:' + $ol + 'px;width:' + $w + 'px;" class="delete"><i class="fa fa-trash-o"></i></div>')
        }
    });
    $('ul#msgs').on('mouseleave', 'li', function() {
        $(this).find(".delete").remove()
    });
    $(".panel-title").click(function() {
        closeHelp()
    });
    if ($("#download-result").hasClass('static')) {
        $("#left-panel").hide();
        $("#right-panel").hide()
    }
    if ($('.sticky-sidebar').length > 0) {
        $('.sticky-sidebar').hcSticky({
            bottomEnd: 100
        })
    }
});

function closeHelp() {
    $("#startup-help").fadeOut(500)
}

function closeDownload() {
    $("#left-panel").animate({
        left: '0'
    }, 400);
    $("#right-panel").animate({
        right: '0'
    }, 400);
    $("#phone").show();
    $("#phone").animate({
        marginTop: '0'
    }, 800);
    $("#download-result").animate({
        left: '2000px',
        opacity: 0
    }, 800).removeClass('active')
}
var iBytesUploaded = 0;
var iBytesTotal = 0;
var iPreviousBytesLoaded = 0;
var iMaxFilesize = 1048576;
var oTimer = 0;
var sResultFileSize = '';
var sResultFileName = '';

function secondsToTime(secs) {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600)) / 60);
    var sec = Math.floor(secs - (hr * 3600) - (min * 60));
    if (hr < 10) {
        hr = "0" + hr
    }
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    if (hr) {
        hr = "00"
    }
    return hr + ':' + min + ':' + sec
};

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i]
};

function fileSelected() {
    var oFile = document.getElementById('image_file').files[0];
    var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
    if (!rFilter.test(oFile.type)) {
        document.getElementById('error').style.display = 'block';
        return
    }
    if (oFile.size > iMaxFilesize) {
        document.getElementById('warnsize').style.display = 'block';
        return
    }
    var oImage = document.getElementById('preview');
    var oReader = new FileReader();
    oReader.onload = function(e) {
        oImage.src = e.target.result;
        oImage.onload = function() {
            sResultFileSize = bytesToSize(oFile.size);
            sResultFileName = oFile.name
        }
    };
    oReader.readAsDataURL(oFile)
}

function startUploading() {
//    iPreviousBytesLoaded = 0;
//    var vFD = new FormData(document.getElementById('upload_form'));
//    var oXHR = new XMLHttpRequest();
//    oXHR.upload.addEventListener('progress', uploadProgress, false);
//    oXHR.addEventListener('load', uploadFinish, false);
//    oXHR.addEventListener('error', uploadError, false);
//    oXHR.addEventListener('abort', uploadAbort, false);
//    oXHR.open('POST', 'upload.php');
//    oXHR.send(vFD);
  if (this.files && this.files[0]) {
            var readerProfile = new FileReader();
            $(readerProfile).load(function(e) {
                $('#profile-picture').attr('src', e.target.result);
            });
            readerProfile.readAsDataURL(this.files[0]);
        }
        $("#profile-picture-upload input").change(readURL);
    oTimer = setInterval(doInnerUpdates, 300)
}
window.preview = function(input) {
        if (input.files && input.files[0]) {
            $(input.files).each(function() {
                var reader = new FileReader();
                reader.readAsDataURL(this);
                reader.onload = function(e) {
                    uploadFinish(e.target.result);
                   // $("#messages-list").append("<li class='text-message-img'><img class='thumb' src='" + e.target.result + "'></li>");
                }
            });
        }
    }

function doInnerUpdates() {
    var iCB = iBytesUploaded;
    var iDiff = iCB - iPreviousBytesLoaded;
    if (iDiff == 0) return;
    iPreviousBytesLoaded = iCB;
    iDiff = iDiff * 2;
    var iBytesRem = iBytesTotal - iPreviousBytesLoaded;
    var secondsRemaining = iBytesRem / iDiff;
    var iSpeed = iDiff.toString() + 'B/s';
    if (iDiff > 1024 * 1024) {
        iSpeed = (Math.round(iDiff * 100 / (1024 * 1024)) / 100).toString() + 'MB/s'
    } else if (iDiff > 1024) {
        iSpeed = (Math.round(iDiff * 100 / 1024) / 100).toString() + 'KB/s'
    }
    document.getElementById('speed').innerHTML = iSpeed;
    document.getElementById('remaining').innerHTML = '| ' + secondsToTime(secondsRemaining)
}

function uploadProgress(e) {
    if (e.lengthComputable) {
        iBytesUploaded = e.loaded;
        iBytesTotal = e.total;
        var iPercentComplete = Math.round(e.loaded * 100 / e.total);
        var iBytesTransfered = bytesToSize(iBytesUploaded);
        if (iPercentComplete == 100) {
            var oUploadResponse = document.getElementById('upload_response')
        }
    } else {}
}

function uploadFinish(e) {
    var $color = $("input[name=sender]:checked").val();
    var $msg = $("#msg").val();
  var data = e;

            $("#msgs").animate({
                scrollTop: $('#msgs').height()
            }, 500);
            if ($('#example-msg').length > 0) {
                $("#example-msg").fadeOut(250, function() {
                    var newItem = $('<li class="msg-img"><div class="top-left-border img-borders"></div><div class="top-right-border img-borders"></div><div class="bottom-left-border img-borders"></div><div class="bottom-right-border img-borders"></div><img src="' + data + '"><div class="sep"></div></li>');
                    var newItem2 = $('<li class="msg-timestamp"><div class="delete" style="display:none;"><i class="fa fa-trash-o"></i></div><div class="content"><p>Today 8:32 AM</p></div><div class="sep"></div></li>');
                    $("#example-msg").remove();
                    $("#msgs").append(newItem2);
                    $("#msgs").append(newItem);
                    $w = newItem.width();
                    $h = newItem.height();
                    $ot = newItem.offset().top;
                    $ol = newItem.offset().left;
                    newItem.css('top', $ot + 'px').css('left', $ol + 'px').css('width', $w + 'px');
                    $w2 = newItem2.width();
                    $h2 = newItem2.height();
                    $ot2 = newItem2.offset().top;
                    $ol2 = newItem2.offset().left;
                    newItem2.css('top', $ot2 + 'px').css('left', $ol2 + 'px').css('width', $w2 + 'px');
                    $("#msgs").animate({
                        scrollTop: $('#msgs-wrapper').height()
                    }, 1000)
                });
                $(".example-msg").fadeOut(250)
            } else {
                var newItem = $('<li class="msg-img"><div class="content"><img src="' + data + '"></div><div class="sep"></div></li>');
                $("#example-msg").remove();
                $("#msgs").append(newItem);
                $w = newItem.width();
                $h = newItem.height();
                $ot = newItem.offset().top;
                $ol = newItem.offset().left;
                newItem.css('top', $ot + 'px').css('left', $ol + 'px').css('width', $w + 'px');
                $("#msgs").animate({
                    scrollTop: $('#msgs-wrapper').height()
                }, 1000)
            }
        
    
    clearInterval(oTimer)
}

function trim(s) {
    return (s || '').replace(/^\s+|\s+$/g, '')
}

function downloadFile(token) {
    if (!token) {
        var token = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    }
    $("#like-response").html('<i class="fa fa-spin fa-spinner"></i>');
    if (token) {
        $.get("check.like.php", {
            token: token
        }, function(data) {
            $("#like-response").html('<i class="fa fa-spin fa-spinner"></i>');
            location.href = token;
            data = trim(data);
            if (data == 'true') {} else {
                $("#like-response").html('<div class="label label-warning text-lg">Click on the like button below to unlock your fake iPhone iOS7 Text image</div>')
            }
        })
    }
}

function uploadError(e) {
    document.getElementById('error2').style.display = 'block';
    clearInterval(oTimer)
}

function uploadAbort(e) {
    document.getElementById('abort').style.display = 'block';
    clearInterval(oTimer)
}

function downloadImg() {
    if (!$("#download-result").hasClass('active')) {
        $("#dlbtn").fadeOut(500);
        $("#left-panel").animate({
            left: '-1000px'
        }, 400);
        $("#right-panel").animate({
            right: '-1000px'
        }, 400);
        $("#phone").animate({
            marginTop: '1000px'
        }, 400);
        $("#download-result").css('left', '-3000px').animate({
            opacity: 1
        }, 800).addClass('active');
        //$("#msgs").addClass('dragging');
        closeHelp();
        $("#download-loading").animate({
            top: '300px'
        }, 1000, function() {
            $('body, html').animate({
                scrollTop: 0
            }, 'slow');
            var $centerBg = $("#center").css('background-image');
            var $centerW = $("#center").width();
            var $centerP = $("#center").css('padding');
            var $centerM = $("#center").css('margin');
            var $msgsP = $("#msgs").css('padding');
            $("#center").css('background-image', 'none').css('width', '385px').css('padding', '0').css('margin', '0').css('margin-left', '25px');
            $("#msg").css('padding-left', '0');
            $('.msg-img').each(function() {
                var distanceTop = $(this).height() - 19;
                $(this).find('.bottom-left-border').css('margin-top', distanceTop + 'px');
                $(this).find('.bottom-right-border').css('margin-top', distanceTop + 'px')
            });
            $(".img-borders").show();
            html2canvas([document.getElementById("center")], {
                onrendered: function(canvas) {
                    logging: true,
                  //  $.post("save.php", {
                        data= canvas.toDataURL("image/png")
                   // }, function(data) {
                        $(".img-borders").hide();
                        $("#center").css('background-image', $centerBg).css('width', $centerW).css('padding', $centerP).css('margin', $centerM);
                        $("#msg").css('padding-left', $msgsP);
                        var $cp = $("#center-panel").width();
                        var $lp = $("#left-panel").width();
                        $("#download-result").css('width', $cp + 'px').animate({
                            left: 0,
                          //  marginLeft: $lp + 'px'
                        }, 1000);
                        $("#download-loading").animate({
                            top: '-3000px'
                        }, 800);
                        var img = data.split("||");
                        var token = img[1];
                        $("#blurred-result").attr('src', img[0] );
                        window.history.pushState('Download', '', token);
                        $("#phone").fadeOut()
                  //  })
                }
            })
        })
    }
}

function getImg(token, static1) {
    if (!$("#download-result").hasClass('static')) {
        $("#left-panel").animate({
            left: '-1000px'
        }, 400);
        $("#right-panel").animate({
            right: '-1000px'
        }, 400);
        $("#phone").animate({
            marginTop: '1000px'
        }, 400, function() {
            $("#phone").fadeOut()
        });
        closeHelp();
        var $cp = $("#center-panel").width();
        var $lp = $("#left-panel").width()
    } else if (static1 == 'true') {
        var $cp = 0;
        var $lp = 0
    }
    $("#download-result").css('width', $cp + 'px').animate({
        left: 0,
        marginLeft: $lp + 'px',
        opacity: 1
    }, 1000, function() {
        $("#phone").fadeOut();
        $.get("fetch.php", {
            token: token
        }, function(data) {
            var r = data.split("||");
            var response = r[0];
            if (response == 1) {
                $("#blurred-result").hide();
                $("#image-result").attr('src', r[1])
            } else {
                $("#blurred-result").attr('src', r[1])
            }
        })
    })
};
(function($, window, undefined) {
    if ('ontouchstart' in document) return;
    var $allDropdowns = $();
    $.fn.dropdownHover = function(options) {
        $allDropdowns = $allDropdowns.add(this.parent());
        return this.each(function() {
            var $this = $(this),
                $parent = $this.parent(),
                defaults = {
                    delay: 500,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                settings = $.extend(true, {}, defaults, options, data),
                timeout;
            $parent.hover(function(event) {
                if (!$parent.hasClass('open') && !$this.is(event.target)) {
                    return true
                }
                if (settings.instantlyCloseOthers === true) $allDropdowns.removeClass('open');
                window.clearTimeout(timeout);
                $parent.addClass('open');
                $parent.trigger($.Event('show.bs.dropdown'))
            }, function() {
                timeout = window.setTimeout(function() {
                    $parent.removeClass('open');
                    $parent.trigger('hide.bs.dropdown')
                }, settings.delay)
            });
            $this.hover(function() {
                if (settings.instantlyCloseOthers === true) $allDropdowns.removeClass('open');
                window.clearTimeout(timeout);
                $parent.addClass('open');
                $parent.trigger($.Event('show.bs.dropdown'))
            });
            $parent.find('.dropdown-submenu').each(function() {
                var $this = $(this);
                var subTimeout;
                $this.hover(function() {
                    window.clearTimeout(subTimeout);
                    $this.children('.dropdown-menu').show();
                    $this.siblings().children('.dropdown-menu').hide()
                }, function() {
                    var $submenu = $this.children('.dropdown-menu');
                    subTimeout = window.setTimeout(function() {
                        $submenu.hide()
                    }, settings.delay)
                })
            })
        })
    };
    $(document).ready(function() {
        $('[data-hover="dropdown"]').dropdownHover()
    })
})(jQuery, this);
(function(a) {
    a.fn.getOffsets = function(b) {
        var c = {
            directions: ["left", "right", "top", "bottom"],
            offsetOfParent: false
        };
        var b = a.extend(c, b);
        var d = [];
        var e = a(this);
        objectOffset = e.offset();
        objectPosition = e.position();
        if (b.offsetOfParent == true) {
            if (a.inArray("left", b.directions) !== -1) {
                leftOffsetInPixels = objectPosition.left;
                d.push(leftOffsetInPixels)
            }
            if (a.inArray("right", b.directions) !== -1) {
                windowWidth = a(window).outerWidth();
                objectWidth = a(e).width();
                objectOffsetLeft = objectPosition.left;
                rightOffsetInPixels = windowWidth - objectWidth - objectOffsetLeft;
                d.push(rightOffsetInPixels)
            }
            if (a.inArray("top", b.directions) !== -1) {
                topOffsetInPixels = objectPosition.top;
                d.push(topOffsetInPixels)
            }
            if (a.inArray("bottom", b.directions) !== -1) {
                windowHeight = a(window).outerHeight();
                objectHeight = a(e).height();
                objectOffsetTop = objectPosition.top;
                bottomOffsetInPixels = windowHeight - objectHeight - objectOffsetTop;
                d.push(bottomOffsetInPixels)
            }
            return d
        } else {
            if (a.inArray("left", b.directions) !== -1) {
                leftOffsetInPixels = objectOffset.left;
                d.push(leftOffsetInPixels)
            }
            if (a.inArray("right", b.directions) !== -1) {
                windowWidth = a(window).outerWidth();
                objectWidth = a(e).width();
                objectOffsetLeft = objectOffset.left;
                rightOffsetInPixels = windowWidth - objectWidth - objectOffsetLeft;
                d.push(rightOffsetInPixels)
            }
            if (a.inArray("top", b.directions) !== -1) {
                topOffsetInPixels = objectOffset.top;
                d.push(topOffsetInPixels)
            }
            if (a.inArray("bottom", b.directions) !== -1) {
                windowHeight = a(window).outerHeight();
                objectHeight = a(e).height();
                objectOffsetTop = objectOffset.top;
                bottomOffsetInPixels = windowHeight - objectHeight - objectOffsetTop;
                d.push(bottomOffsetInPixels)
            }
            return d
        }
    }
})(jQuery)