module.exports = ({
  Doctor_Name,
  Doctor_Degree,
  Doctor_Specialization,
  Doctor_RegistrationNumber,
  Doctor_Address,
  Patient_Name,
  Patient_Age,
  Patient_Sex,
  Patient_Address,
  Patient_MobileNumber,
  Symptoms,
  Diagnosis,
  ReferenceNumber,
  Duration,
  TabletName,
  DrugName,
  date,
  Time,
}) => {
  const doctor_Name = Doctor_Name;
  const doctor_Degree = Doctor_Degree;
  const doctor_Specialization = Doctor_Specialization;
  const doctor_RegistrationNumber = Doctor_RegistrationNumber;
  const doctor_Address = Doctor_Address;
  const patient_Name = Patient_Name;
  const patient_Age = Patient_Age;
  const patient_Sex = Patient_Sex;
  const patient_Address = Patient_Address;
  const patient_MobileNumber = Patient_MobileNumber;
  const symptoms = Symptoms;
  const diagnosis = Diagnosis;
  const referenceNumber = ReferenceNumber;
  const duration = Duration;
  const tabletName = TabletName;
  const drugName = DrugName;
  const Date = date;
  const time = Time;
  return `
<!DOCTYPE html>
<!-- Created by pdf2htmlEX (https://github.com/pdf2htmlEX/pdf2htmlEX) -->
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta charset="utf-8" />
    <meta name="generator" content="pdf2htmlEX" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <style type="text/css">
        /*! 
 * Base CSS for pdf2htmlEX
 * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> 
 * https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE
 */

        #sidebar {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 250px;
            padding: 0;
            margin: 0;
            overflow: auto
        }

        #page-container {
            position: absolute;
            top: 0;
            left: 0;
            margin: 0;
            padding: 0;
            border: 0
        }

        @media screen {
            #sidebar.opened+#page-container {
                left: 250px
            }
            #page-container {
                bottom: 0;
                right: 0;
                overflow: auto
            }
            .loading-indicator {
                display: none
            }
            .loading-indicator.active {
                display: block;
                position: absolute;
                width: 64px;
                height: 64px;
                top: 50%;
                left: 50%;
                margin-top: -32px;
                margin-left: -32px
            }
            .loading-indicator img {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0
            }
        }

        @media print {
            @page {
                margin: 0
            }
            html {
                margin: 0
            }
            body {
                margin: 0;
                -webkit-print-color-adjust: exact
            }
            #sidebar {
                display: none
            }
            #page-container {
                width: auto;
                height: auto;
                overflow: visible;
                background-color: transparent
            }
            .d {
                display: none
            }
        }

        .pf {
            position: relative;
            background-color: white;
            overflow: hidden;
            margin: 0;
            border: 0
        }

        .pc {
            position: absolute;
            border: 0;
            padding: 0;
            margin: 0;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: block;
            transform-origin: 0 0;
            -ms-transform-origin: 0 0;
            -webkit-transform-origin: 0 0
        }

        .pc.opened {
            display: block
        }

        .bf {
            position: absolute;
            border: 0;
            margin: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            -ms-user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none
        }

        .bi {
            position: absolute;
            border: 0;
            margin: 0;
            -ms-user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none
        }

        @media print {
            .pf {
                margin: 0;
                box-shadow: none;
                page-break-after: always;
                page-break-inside: avoid
            }
            @-moz-document url-prefix() {
                .pf {
                    overflow: visible;
                    border: 1px solid #fff
                }
                .pc {
                    overflow: visible
                }
            }
        }

        .c {
            position: absolute;
            border: 0;
            padding: 0;
            margin: 0;
            overflow: hidden;
            display: block
        }

        .t {
            position: absolute;
            white-space: pre;
            font-size: 1px;
            transform-origin: 0 100%;
            -ms-transform-origin: 0 100%;
            -webkit-transform-origin: 0 100%;
            unicode-bidi: bidi-override;
            -moz-font-feature-settings: "liga" 0
        }

        .t:after {
            content: ''
        }

        .t:before {
            content: '';
            display: inline-block
        }

        .t span {
            position: relative;
            unicode-bidi: bidi-override
        }

        ._ {
            display: inline-block;
            color: transparent;
            z-index: -1
        }

        ::selection {
            background: rgba(127, 255, 255, 0.4)
        }

        ::-moz-selection {
            background: rgba(127, 255, 255, 0.4)
        }

        .pi {
            display: none
        }

        .d {
            position: absolute;
            transform-origin: 0 100%;
            -ms-transform-origin: 0 100%;
            -webkit-transform-origin: 0 100%
        }

        .it {
            border: 0;
            background-color: rgba(255, 255, 255, 0.0)
        }

        .ir:hover {
            cursor: pointer
        }
    </style>
    <style type="text/css">
        /*! 
 * Fancy styles for pdf2htmlEX
 * Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> 
 * https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE
 */

        @keyframes fadein {
            from {
                opacity: 0
            }
            to {
                opacity: 1
            }
        }

        @-webkit-keyframes fadein {
            from {
                opacity: 0
            }
            to {
                opacity: 1
            }
        }

        @keyframes swing {
            0 {
                transform: rotate(0)
            }
            10% {
                transform: rotate(0)
            }
            90% {
                transform: rotate(720deg)
            }
            100% {
                transform: rotate(720deg)
            }
        }

        @-webkit-keyframes swing {
            0 {
                -webkit-transform: rotate(0)
            }
            10% {
                -webkit-transform: rotate(0)
            }
            90% {
                -webkit-transform: rotate(720deg)
            }
            100% {
                -webkit-transform: rotate(720deg)
            }
        }

        @media screen {
            #sidebar {
                background-color: #2f3236;
                background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDAzYzNmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxZTI5MmQiPjwvcGF0aD4KPC9zdmc+")
            }
            #outline {
                font-family: Georgia, Times, "Times New Roman", serif;
                font-size: 13px;
                margin: 2em 1em
            }
            #outline ul {
                padding: 0
            }
            #outline li {
                list-style-type: none;
                margin: 1em 0
            }
            #outline li>ul {
                margin-left: 1em
            }
            #outline a,
            #outline a:visited,
            #outline a:hover,
            #outline a:active {
                line-height: 1.2;
                color: #e8e8e8;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-decoration: none;
                display: block;
                overflow: hidden;
                outline: 0
            }
            #outline a:hover {
                color: #0cf
            }
            #page-container {
                background-color: #9e9e9e;
                background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjOWU5ZTllIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=");
                -webkit-transition: left 500ms;
                transition: left 500ms
            }
            .pf {
                margin: 13px auto;
                box-shadow: 1px 1px 3px 1px #333;
                border-collapse: separate
            }
            .pc.opened {
                -webkit-animation: fadein 100ms;
                animation: fadein 100ms
            }
            .loading-indicator.active {
                -webkit-animation: swing 1.5s ease-in-out .01s infinite alternate none;
                animation: swing 1.5s ease-in-out .01s infinite alternate none
            }
            .checked {
                background: no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goQDSYgDiGofgAAAslJREFUOMvtlM9LFGEYx7/vvOPM6ywuuyPFihWFBUsdNnA6KLIh+QPx4KWExULdHQ/9A9EfUodYmATDYg/iRewQzklFWxcEBcGgEplDkDtI6sw4PzrIbrOuedBb9MALD7zv+3m+z4/3Bf7bZS2bzQIAcrmcMDExcTeXy10DAFVVAQDksgFUVZ1ljD3yfd+0LOuFpmnvVVW9GHhkZAQcxwkNDQ2FSCQyRMgJxnVdy7KstKZpn7nwha6urqqfTqfPBAJAuVymlNLXoigOhfd5nmeiKL5TVTV+lmIKwAOA7u5u6Lped2BsbOwjY6yf4zgQQkAIAcedaPR9H67r3uYBQFEUFItFtLe332lpaVkUBOHK3t5eRtf1DwAwODiIubk5DA8PM8bYW1EU+wEgCIJqsCAIQAiB7/u253k2BQDDMJBKpa4mEon5eDx+UxAESJL0uK2t7XosFlvSdf0QAEmlUnlRFJ9Waho2Qghc1/U9z3uWz+eX+Wr+lL6SZfleEAQIggA8z6OpqSknimIvYyybSCReMsZ6TislhCAIAti2Dc/zejVNWwCAavN8339j27YbTg0AGGM3WltbP4WhlRWq6Q/btrs1TVsYHx+vNgqKoqBUKn2NRqPFxsbGJzzP05puUlpt0ukyOI6z7zjOwNTU1OLo6CgmJyf/gA3DgKIoWF1d/cIY24/FYgOU0pp0z/Ityzo8Pj5OTk9PbwHA+vp6zWghDC+VSiuRSOQgGo32UErJ38CO42wdHR09LBQK3zKZDDY2NupmFmF4R0cHVlZWlmRZ/iVJUn9FeWWcCCE4ODjYtG27Z2Zm5juAOmgdGAB2d3cBADs7O8uSJN2SZfl+WKlpmpumaT6Yn58vn/fs6XmbhmHMNjc3tzDGFI7jYJrm5vb29sDa2trPC/9aiqJUy5pOp4f6+vqeJ5PJBAB0dnZe/t8NBajx/z37Df5OGX8d13xzAAAAAElFTkSuQmCC)
            }
        }
    </style>
    <style type="text/css">
        .ff0 {
            font-family: sans-serif;
            visibility: hidden;
        }

        @font-face {
            font-family: ff1;
            src: url('data:application/font-woff;base64,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')format("woff");
        }

        .ff1 {
            font-family: ff1;
            line-height: 0.958984;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }

        @font-face {
            font-family: ff2;
            src: url('data:application/font-woff;base64,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')format("woff");
        }

        .ff2 {
            font-family: ff2;
            line-height: 0.752258;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }

        @font-face {
            font-family: ff3;
            src: url('data:application/font-woff;base64,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')format("woff");
        }

        .ff3 {
            font-family: ff3;
            line-height: 0.752028;
            font-style: normal;
            font-weight: normal;
            visibility: visible;
        }

        .m0 {
            transform: matrix(0.375000, 0.000000, 0.000000, 0.375000, 0, 0);
            -ms-transform: matrix(0.375000, 0.000000, 0.000000, 0.375000, 0, 0);
            -webkit-transform: matrix(0.375000, 0.000000, 0.000000, 0.375000, 0, 0);
        }

        .v0 {
            vertical-align: 0.000000px;
        }

        .ls0 {
            letter-spacing: 0.000000px;
        }

        .sc_ {
            text-shadow: none;
        }

        .sc0 {
            text-shadow: -0.015em 0 transparent, 0 0.015em transparent, 0.015em 0 transparent, 0 -0.015em transparent;
        }

        @media screen and (-webkit-min-device-pixel-ratio:0) {
            .sc_ {
                -webkit-text-stroke: 0px transparent;
            }
            .sc0 {
                -webkit-text-stroke: 0.015em transparent;
                text-shadow: none;
            }
        }

        .ws0 {
            word-spacing: 0.000000px;
        }

        ._6 {
            margin-left: -2.276644px;
        }

        ._2 {
            margin-left: -1.180167px;
        }

        ._0 {
            width: 1.136549px;
        }

        ._7 {
            width: 10.097731px;
        }

        ._3 {
            width: 27.802005px;
        }

        ._1 {
            width: 29.025790px;
        }

        ._4 {
            width: 188.291562px;
        }

        ._5 {
            width: 661.245159px;
        }

        .fc2 {
            color: transparent;
        }

        .fc0 {
            color: rgb(0, 0, 0);
        }

        .fc1 {
            color: rgb(117, 117, 117);
        }

        .fs2 {
            font-size: 28.369393px;
        }

        .fs1 {
            font-size: 34.043272px;
        }

        .fs0 {
            font-size: 45.391029px;
        }

        .y0 {
            bottom: -0.750000px;
        }

        .y1d {
            bottom: 4.255412px;
        }

        .y15 {
            bottom: 5.319264px;
        }

        .y1f {
            bottom: 5.319265px;
        }

        .y2a {
            bottom: 13.830085px;
        }

        .y1c {
            bottom: 21.277048px;
        }

        .y14 {
            bottom: 27.660161px;
        }

        .y1e {
            bottom: 27.660162px;
        }

        .y29 {
            bottom: 27.660164px;
        }

        .y1b {
            bottom: 38.298684px;
        }

        .y28 {
            bottom: 41.490244px;
        }

        .y3 {
            bottom: 42.835573px;
        }

        .y13 {
            bottom: 50.001058px;
        }

        .y19 {
            bottom: 50.001059px;
        }

        .y27 {
            bottom: 55.320323px;
        }

        .y26 {
            bottom: 69.150402px;
        }

        .y12 {
            bottom: 72.341955px;
        }

        .y1 {
            bottom: 76.878838px;
        }

        .y25 {
            bottom: 107.449082px;
        }

        .y24 {
            bottom: 134.045388px;
        }

        .y23 {
            bottom: 156.386285px;
        }

        .y22 {
            bottom: 178.727182px;
        }

        .y17 {
            bottom: 486.180478px;
        }

        .y21 {
            bottom: 513.840636px;
        }

        .y20 {
            bottom: 552.139317px;
        }

        .y2 {
            bottom: 646.822166px;
        }

        .y18 {
            bottom: 668.380684px;
        }

        .y1a {
            bottom: 684.338468px;
        }

        .y16 {
            bottom: 719.164111px;
        }

        .y11 {
            bottom: 798.170658px;
        }

        .y10 {
            bottom: 860.656459px;
        }

        .yf {
            bottom: 882.997356px;
        }

        .ye {
            bottom: 905.338253px;
        }

        .yd {
            bottom: 927.679150px;
        }

        .yc {
            bottom: 950.020046px;
        }

        .y4 {
            bottom: 1005.340363px;
        }

        .y6 {
            bottom: 1009.595772px;
        }

        .y5 {
            bottom: 1031.936669px;
        }

        .yb {
            bottom: 1050.022157px;
        }

        .ya {
            bottom: 1072.363054px;
        }

        .y9 {
            bottom: 1094.703951px;
        }

        .y8 {
            bottom: 1117.044848px;
        }

        .y7 {
            bottom: 1139.385745px;
        }

        .ha {
            height: 21.027704px;
        }

        .h5 {
            height: 25.233245px;
        }

        .h9 {
            height: 33.090237px;
        }

        .h3 {
            height: 33.644327px;
        }

        .h8 {
            height: 51.064907px;
        }

        .h7 {
            height: 67.022691px;
        }

        .h6 {
            height: 89.363588px;
        }

        .h2 {
            height: 671.290764px;
        }

        .h4 {
            height: 1177.684425px;
        }

        .h0 {
            height: 1263.000000px;
        }

        .h1 {
            height: 1263.750000px;
        }

        .w7 {
            width: 147.875462px;
        }

        .w6 {
            width: 155.322428px;
        }

        .w4 {
            width: 388.306068px;
        }

        .w5 {
            width: 390.433774px;
        }

        .w2 {
            width: 797.889182px;
        }

        .w3 {
            width: 806.400000px;
        }

        .w0 {
            width: 892.500000px;
        }

        .w1 {
            width: 893.250000px;
        }

        .x0 {
            left: 0.000000px;
        }

        .x2 {
            left: 7.446966px;
        }

        .xc {
            left: 19.149340px;
        }

        .x19 {
            left: 26.596306px;
        }

        .x3 {
            left: 42.480000px;
        }

        .x1 {
            left: 50.990818px;
        }

        .xf {
            left: 61.629340px;
        }

        .x10 {
            left: 78.193139px;
        }

        .x11 {
            left: 243.622162px;
        }

        .x4 {
            left: 247.877571px;
        }

        .x12 {
            left: 278.655197px;
        }

        .x14 {
            left: 303.123799px;
        }

        .x15 {
            left: 339.368863px;
        }

        .xd {
            left: 445.754087px;
        }

        .xe {
            left: 450.009496px;
        }

        .x6 {
            left: 507.457517px;
        }

        .x13 {
            left: 513.766544px;
        }

        .x5 {
            left: 541.500788px;
        }

        .xb {
            left: 570.224798px;
        }

        .x7 {
            left: 624.481263px;
        }

        .x16 {
            left: 630.864376px;
        }

        .xa {
            left: 639.375194px;
        }

        .x9 {
            left: 708.525589px;
        }

        .x18 {
            left: 714.908703px;
        }

        .x8 {
            left: 732.994191px;
        }

        .x17 {
            left: 739.377304px;
        }

        @media print {
            .v0 {
                vertical-align: 0.000000pt;
            }
            .ls0 {
                letter-spacing: 0.000000pt;
            }
            .ws0 {
                word-spacing: 0.000000pt;
            }
            ._6 {
                margin-left: -2.023683pt;
            }
            ._2 {
                margin-left: -1.049037pt;
            }
            ._0 {
                width: 1.010266pt;
            }
            ._7 {
                width: 8.975761pt;
            }
            ._3 {
                width: 24.712893pt;
            }
            ._1 {
                width: 25.800702pt;
            }
            ._4 {
                width: 167.370277pt;
            }
            ._5 {
                width: 587.773475pt;
            }
            .fs2 {
                font-size: 25.217238pt;
            }
            .fs1 {
                font-size: 30.260686pt;
            }
            .fs0 {
                font-size: 40.347581pt;
            }
            .y0 {
                bottom: -0.666667pt;
            }
            .y1d {
                bottom: 3.782589pt;
            }
            .y15 {
                bottom: 4.728235pt;
            }
            .y1f {
                bottom: 4.728236pt;
            }
            .y2a {
                bottom: 12.293409pt;
            }
            .y1c {
                bottom: 18.912932pt;
            }
            .y14 {
                bottom: 24.586810pt;
            }
            .y1e {
                bottom: 24.586811pt;
            }
            .y29 {
                bottom: 24.586813pt;
            }
            .y1b {
                bottom: 34.043275pt;
            }
            .y28 {
                bottom: 36.880216pt;
            }
            .y3 {
                bottom: 38.076065pt;
            }
            .y13 {
                bottom: 44.445385pt;
            }
            .y19 {
                bottom: 44.445386pt;
            }
            .y27 {
                bottom: 49.173620pt;
            }
            .y26 {
                bottom: 61.467024pt;
            }
            .y12 {
                bottom: 64.303960pt;
            }
            .y1 {
                bottom: 68.336745pt;
            }
            .y25 {
                bottom: 95.510295pt;
            }
            .y24 {
                bottom: 119.151456pt;
            }
            .y23 {
                bottom: 139.010031pt;
            }
            .y22 {
                bottom: 158.868606pt;
            }
            .y17 {
                bottom: 432.160425pt;
            }
            .y21 {
                bottom: 456.747232pt;
            }
            .y20 {
                bottom: 490.790504pt;
            }
            .y2 {
                bottom: 574.953036pt;
            }
            .y18 {
                bottom: 594.116164pt;
            }
            .y1a {
                bottom: 608.300861pt;
            }
            .y16 {
                bottom: 639.256988pt;
            }
            .y11 {
                bottom: 709.485029pt;
            }
            .y10 {
                bottom: 765.027963pt;
            }
            .yf {
                bottom: 784.886538pt;
            }
            .ye {
                bottom: 804.745113pt;
            }
            .yd {
                bottom: 824.603688pt;
            }
            .yc {
                bottom: 844.462264pt;
            }
            .y4 {
                bottom: 893.635878pt;
            }
            .y6 {
                bottom: 897.418464pt;
            }
            .y5 {
                bottom: 917.277039pt;
            }
            .yb {
                bottom: 933.353028pt;
            }
            .ya {
                bottom: 953.211603pt;
            }
            .y9 {
                bottom: 973.070178pt;
            }
            .y8 {
                bottom: 992.928753pt;
            }
            .y7 {
                bottom: 1012.787328pt;
            }
            .ha {
                height: 18.691293pt;
            }
            .h5 {
                height: 22.429551pt;
            }
            .h9 {
                height: 29.413544pt;
            }
            .h3 {
                height: 29.906068pt;
            }
            .h8 {
                height: 45.391029pt;
            }
            .h7 {
                height: 59.575726pt;
            }
            .h6 {
                height: 79.434301pt;
            }
            .h2 {
                height: 596.702902pt;
            }
            .h4 {
                height: 1046.830600pt;
            }
            .h0 {
                height: 1122.666667pt;
            }
            .h1 {
                height: 1123.333333pt;
            }
            .w7 {
                width: 131.444855pt;
            }
            .w6 {
                width: 138.064380pt;
            }
            .w4 {
                width: 345.160950pt;
            }
            .w5 {
                width: 347.052243pt;
            }
            .w2 {
                width: 709.234828pt;
            }
            .w3 {
                width: 716.800000pt;
            }
            .w0 {
                width: 793.333333pt;
            }
            .w1 {
                width: 794.000000pt;
            }
            .x0 {
                left: 0.000000pt;
            }
            .x2 {
                left: 6.619525pt;
            }
            .xc {
                left: 17.021636pt;
            }
            .x19 {
                left: 23.641161pt;
            }
            .x3 {
                left: 37.760000pt;
            }
            .x1 {
                left: 45.325172pt;
            }
            .xf {
                left: 54.781636pt;
            }
            .x10 {
                left: 69.505013pt;
            }
            .x11 {
                left: 216.553033pt;
            }
            .x4 {
                left: 220.335619pt;
            }
            .x12 {
                left: 247.693509pt;
            }
            .x14 {
                left: 269.443377pt;
            }
            .x15 {
                left: 301.661212pt;
            }
            .xd {
                left: 396.225855pt;
            }
            .xe {
                left: 400.008441pt;
            }
            .x6 {
                left: 451.073348pt;
            }
            .x13 {
                left: 456.681372pt;
            }
            .x5 {
                left: 481.334034pt;
            }
            .xb {
                left: 506.866488pt;
            }
            .x7 {
                left: 555.094456pt;
            }
            .x16 {
                left: 560.768334pt;
            }
            .xa {
                left: 568.333506pt;
            }
            .x9 {
                left: 629.800524pt;
            }
            .x18 {
                left: 635.474402pt;
            }
            .x8 {
                left: 651.550392pt;
            }
            .x17 {
                left: 657.224270pt;
            }
        }
    </style>
    <script>
        /*
         Copyright 2012 Mozilla Foundation 
         Copyright 2013 Lu Wang <coolwanglu@gmail.com>
         Apachine License Version 2.0 
        */
        (function() {
            function b(a, b, e, f) {
                var c = (a.className || "").split(/\s+/g);
                "" === c[0] && c.shift();
                var d = c.indexOf(b);
                0 > d && e && c.push(b);
                0 <= d && f && c.splice(d, 1);
                a.className = c.join(" ");
                return 0 <= d
            }
            if (!("classList" in document.createElement("div"))) {
                var e = {
                    add: function(a) {
                        b(this.element, a, !0, !1)
                    },
                    contains: function(a) {
                        return b(this.element, a, !1, !1)
                    },
                    remove: function(a) {
                        b(this.element, a, !1, !0)
                    },
                    toggle: function(a) {
                        b(this.element, a, !0, !0)
                    }
                };
                Object.defineProperty(HTMLElement.prototype, "classList", {
                    get: function() {
                        if (this._classList) return this._classList;
                        var a = Object.create(e, {
                            element: {
                                value: this,
                                writable: !1,
                                enumerable: !0
                            }
                        });
                        Object.defineProperty(this, "_classList", {
                            value: a,
                            writable: !1,
                            enumerable: !1
                        });
                        return a
                    },
                    enumerable: !0
                })
            }
        })();
    </script>
    <script>
        (function() {
            /*
             pdf2htmlEX.js: Core UI functions for pdf2htmlEX 
             Copyright 2012,2013 Lu Wang <coolwanglu@gmail.com> and other contributors 
             https://github.com/pdf2htmlEX/pdf2htmlEX/blob/master/share/LICENSE 
            */
            var pdf2htmlEX = window.pdf2htmlEX = window.pdf2htmlEX || {},
                CSS_CLASS_NAMES = {
                    page_frame: "pf",
                    page_content_box: "pc",
                    page_data: "pi",
                    background_image: "bi",
                    link: "l",
                    input_radio: "ir",
                    __dummy__: "no comma"
                },
                DEFAULT_CONFIG = {
                    container_id: "page-container",
                    sidebar_id: "sidebar",
                    outline_id: "outline",
                    loading_indicator_cls: "loading-indicator",
                    preload_pages: 3,
                    render_timeout: 100,
                    scale_step: 0.9,
                    key_handler: !0,
                    hashchange_handler: !0,
                    view_history_handler: !0,
                    __dummy__: "no comma"
                },
                EPS = 1E-6;

            function invert(a) {
                var b = a[0] * a[3] - a[1] * a[2];
                return [a[3] / b, -a[1] / b, -a[2] / b, a[0] / b, (a[2] * a[5] - a[3] * a[4]) / b, (a[1] * a[4] - a[0] * a[5]) / b]
            }

            function transform(a, b) {
                return [a[0] * b[0] + a[2] * b[1] + a[4], a[1] * b[0] + a[3] * b[1] + a[5]]
            }

            function get_page_number(a) {
                return parseInt(a.getAttribute("data-page-no"), 16)
            }

            function disable_dragstart(a) {
                for (var b = 0, c = a.length; b < c; ++b) a[b].addEventListener("dragstart", function() {
                    return !1
                }, !1)
            }

            function clone_and_extend_objs(a) {
                for (var b = {}, c = 0, e = arguments.length; c < e; ++c) {
                    var h = arguments[c],
                        d;
                    for (d in h) h.hasOwnProperty(d) && (b[d] = h[d])
                }
                return b
            }

            function Page(a) {
                if (a) {
                    this.shown = this.loaded = !1;
                    this.page = a;
                    this.num = get_page_number(a);
                    this.original_height = a.clientHeight;
                    this.original_width = a.clientWidth;
                    var b = a.getElementsByClassName(CSS_CLASS_NAMES.page_content_box)[0];
                    b && (this.content_box = b, this.original_scale = this.cur_scale = this.original_height / b.clientHeight, this.page_data = JSON.parse(a.getElementsByClassName(CSS_CLASS_NAMES.page_data)[0].getAttribute("data-data")), this.ctm = this.page_data.ctm, this.ictm = invert(this.ctm), this.loaded = !0)
                }
            }
            Page.prototype = {
                hide: function() {
                    this.loaded && this.shown && (this.content_box.classList.remove("opened"), this.shown = !1)
                },
                show: function() {
                    this.loaded && !this.shown && (this.content_box.classList.add("opened"), this.shown = !0)
                },
                rescale: function(a) {
                    this.cur_scale = 0 === a ? this.original_scale : a;
                    this.loaded && (a = this.content_box.style, a.msTransform = a.webkitTransform = a.transform = "scale(" + this.cur_scale.toFixed(3) + ")");
                    a = this.page.style;
                    a.height = this.original_height * this.cur_scale + "px";
                    a.width = this.original_width * this.cur_scale +
                        "px"
                },
                view_position: function() {
                    var a = this.page,
                        b = a.parentNode;
                    return [b.scrollLeft - a.offsetLeft - a.clientLeft, b.scrollTop - a.offsetTop - a.clientTop]
                },
                height: function() {
                    return this.page.clientHeight
                },
                width: function() {
                    return this.page.clientWidth
                }
            };

            function Viewer(a) {
                this.config = clone_and_extend_objs(DEFAULT_CONFIG, 0 < arguments.length ? a : {});
                this.pages_loading = [];
                this.init_before_loading_content();
                var b = this;
                document.addEventListener("DOMContentLoaded", function() {
                    b.init_after_loading_content()
                }, !1)
            }
            Viewer.prototype = {
                scale: 1,
                cur_page_idx: 0,
                first_page_idx: 0,
                init_before_loading_content: function() {
                    this.pre_hide_pages()
                },
                initialize_radio_button: function() {
                    for (var a = document.getElementsByClassName(CSS_CLASS_NAMES.input_radio), b = 0; b < a.length; b++) a[b].addEventListener("click", function() {
                        this.classList.toggle("checked")
                    })
                },
                init_after_loading_content: function() {
                    this.sidebar = document.getElementById(this.config.sidebar_id);
                    this.outline = document.getElementById(this.config.outline_id);
                    this.container = document.getElementById(this.config.container_id);
                    this.loading_indicator = document.getElementsByClassName(this.config.loading_indicator_cls)[0];
                    for (var a = !0, b = this.outline.childNodes, c = 0, e = b.length; c < e; ++c)
                        if ("ul" === b[c].nodeName.toLowerCase()) {
                            a = !1;
                            break
                        }
                    a || this.sidebar.classList.add("opened");
                    this.find_pages();
                    if (0 != this.pages.length) {
                        disable_dragstart(document.getElementsByClassName(CSS_CLASS_NAMES.background_image));
                        this.config.key_handler && this.register_key_handler();
                        var h = this;
                        this.config.hashchange_handler && window.addEventListener("hashchange",
                            function(a) {
                                h.navigate_to_dest(document.location.hash.substring(1))
                            }, !1);
                        this.config.view_history_handler && window.addEventListener("popstate", function(a) {
                            a.state && h.navigate_to_dest(a.state)
                        }, !1);
                        this.container.addEventListener("scroll", function() {
                            h.update_page_idx();
                            h.schedule_render(!0)
                        }, !1);
                        [this.container, this.outline].forEach(function(a) {
                            a.addEventListener("click", h.link_handler.bind(h), !1)
                        });
                        this.initialize_radio_button();
                        this.render()
                    }
                },
                find_pages: function() {
                    for (var a = [], b = {}, c = this.container.childNodes,
                            e = 0, h = c.length; e < h; ++e) {
                        var d = c[e];
                        d.nodeType === Node.ELEMENT_NODE && d.classList.contains(CSS_CLASS_NAMES.page_frame) && (d = new Page(d), a.push(d), b[d.num] = a.length - 1)
                    }
                    this.pages = a;
                    this.page_map = b
                },
                load_page: function(a, b, c) {
                    var e = this.pages;
                    if (!(a >= e.length || (e = e[a], e.loaded || this.pages_loading[a]))) {
                        var e = e.page,
                            h = e.getAttribute("data-page-url");
                        if (h) {
                            this.pages_loading[a] = !0;
                            var d = e.getElementsByClassName(this.config.loading_indicator_cls)[0];
                            "undefined" === typeof d && (d = this.loading_indicator.cloneNode(!0),
                                d.classList.add("active"), e.appendChild(d));
                            var f = this,
                                g = new XMLHttpRequest;
                            g.open("GET", h, !0);
                            g.onload = function() {
                                if (200 === g.status || 0 === g.status) {
                                    var b = document.createElement("div");
                                    b.innerHTML = g.responseText;
                                    for (var d = null, b = b.childNodes, e = 0, h = b.length; e < h; ++e) {
                                        var p = b[e];
                                        if (p.nodeType === Node.ELEMENT_NODE && p.classList.contains(CSS_CLASS_NAMES.page_frame)) {
                                            d = p;
                                            break
                                        }
                                    }
                                    b = f.pages[a];
                                    f.container.replaceChild(d, b.page);
                                    b = new Page(d);
                                    f.pages[a] = b;
                                    b.hide();
                                    b.rescale(f.scale);
                                    disable_dragstart(d.getElementsByClassName(CSS_CLASS_NAMES.background_image));
                                    f.schedule_render(!1);
                                    c && c(b)
                                }
                                delete f.pages_loading[a]
                            };
                            g.send(null)
                        }
                        void 0 === b && (b = this.config.preload_pages);
                        0 < --b && (f = this, setTimeout(function() {
                            f.load_page(a + 1, b)
                        }, 0))
                    }
                },
                pre_hide_pages: function() {
                    var a = "@media screen{." + CSS_CLASS_NAMES.page_content_box + "{display:none;}}",
                        b = document.createElement("style");
                    b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a));
                    document.head.appendChild(b)
                },
                render: function() {
                    for (var a = this.container, b = a.scrollTop, c = a.clientHeight, a = b - c, b =
                            b + c + c, c = this.pages, e = 0, h = c.length; e < h; ++e) {
                        var d = c[e],
                            f = d.page,
                            g = f.offsetTop + f.clientTop,
                            f = g + f.clientHeight;
                        g <= b && f >= a ? d.loaded ? d.show() : this.load_page(e) : d.hide()
                    }
                },
                update_page_idx: function() {
                    var a = this.pages,
                        b = a.length;
                    if (!(2 > b)) {
                        for (var c = this.container, e = c.scrollTop, c = e + c.clientHeight, h = -1, d = b, f = d - h; 1 < f;) {
                            var g = h + Math.floor(f / 2),
                                f = a[g].page;
                            f.offsetTop + f.clientTop + f.clientHeight >= e ? d = g : h = g;
                            f = d - h
                        }
                        this.first_page_idx = d;
                        for (var g = h = this.cur_page_idx, k = 0; d < b; ++d) {
                            var f = a[d].page,
                                l = f.offsetTop + f.clientTop,
                                f = f.clientHeight;
                            if (l > c) break;
                            f = (Math.min(c, l + f) - Math.max(e, l)) / f;
                            if (d === h && Math.abs(f - 1) <= EPS) {
                                g = h;
                                break
                            }
                            f > k && (k = f, g = d)
                        }
                        this.cur_page_idx = g
                    }
                },
                schedule_render: function(a) {
                    if (void 0 !== this.render_timer) {
                        if (!a) return;
                        clearTimeout(this.render_timer)
                    }
                    var b = this;
                    this.render_timer = setTimeout(function() {
                        delete b.render_timer;
                        b.render()
                    }, this.config.render_timeout)
                },
                register_key_handler: function() {
                    var a = this;
                    window.addEventListener("DOMMouseScroll", function(b) {
                        if (b.ctrlKey) {
                            b.preventDefault();
                            var c = a.container,
                                e = c.getBoundingClientRect(),
                                c = [b.clientX - e.left - c.clientLeft, b.clientY - e.top - c.clientTop];
                            a.rescale(Math.pow(a.config.scale_step, b.detail), !0, c)
                        }
                    }, !1);
                    window.addEventListener("keydown", function(b) {
                        var c = !1,
                            e = b.ctrlKey || b.metaKey,
                            h = b.altKey;
                        switch (b.keyCode) {
                            case 61:
                            case 107:
                            case 187:
                                e && (a.rescale(1 / a.config.scale_step, !0), c = !0);
                                break;
                            case 173:
                            case 109:
                            case 189:
                                e && (a.rescale(a.config.scale_step, !0), c = !0);
                                break;
                            case 48:
                                e && (a.rescale(0, !1), c = !0);
                                break;
                            case 33:
                                h ? a.scroll_to(a.cur_page_idx - 1) : a.container.scrollTop -=
                                    a.container.clientHeight;
                                c = !0;
                                break;
                            case 34:
                                h ? a.scroll_to(a.cur_page_idx + 1) : a.container.scrollTop += a.container.clientHeight;
                                c = !0;
                                break;
                            case 35:
                                a.container.scrollTop = a.container.scrollHeight;
                                c = !0;
                                break;
                            case 36:
                                a.container.scrollTop = 0, c = !0
                        }
                        c && b.preventDefault()
                    }, !1)
                },
                rescale: function(a, b, c) {
                    var e = this.scale;
                    this.scale = a = 0 === a ? 1 : b ? e * a : a;
                    c || (c = [0, 0]);
                    b = this.container;
                    c[0] += b.scrollLeft;
                    c[1] += b.scrollTop;
                    for (var h = this.pages, d = h.length, f = this.first_page_idx; f < d; ++f) {
                        var g = h[f].page;
                        if (g.offsetTop + g.clientTop >=
                            c[1]) break
                    }
                    g = f - 1;
                    0 > g && (g = 0);
                    var g = h[g].page,
                        k = g.clientWidth,
                        f = g.clientHeight,
                        l = g.offsetLeft + g.clientLeft,
                        m = c[0] - l;
                    0 > m ? m = 0 : m > k && (m = k);
                    k = g.offsetTop + g.clientTop;
                    c = c[1] - k;
                    0 > c ? c = 0 : c > f && (c = f);
                    for (f = 0; f < d; ++f) h[f].rescale(a);
                    b.scrollLeft += m / e * a + g.offsetLeft + g.clientLeft - m - l;
                    b.scrollTop += c / e * a + g.offsetTop + g.clientTop - c - k;
                    this.schedule_render(!0)
                },
                fit_width: function() {
                    var a = this.cur_page_idx;
                    this.rescale(this.container.clientWidth / this.pages[a].width(), !0);
                    this.scroll_to(a)
                },
                fit_height: function() {
                    var a = this.cur_page_idx;
                    this.rescale(this.container.clientHeight / this.pages[a].height(), !0);
                    this.scroll_to(a)
                },
                get_containing_page: function(a) {
                    for (; a;) {
                        if (a.nodeType === Node.ELEMENT_NODE && a.classList.contains(CSS_CLASS_NAMES.page_frame)) {
                            a = get_page_number(a);
                            var b = this.page_map;
                            return a in b ? this.pages[b[a]] : null
                        }
                        a = a.parentNode
                    }
                    return null
                },
                link_handler: function(a) {
                    var b = a.target,
                        c = b.getAttribute("data-dest-detail");
                    if (c) {
                        if (this.config.view_history_handler) try {
                            var e = this.get_current_view_hash();
                            window.history.replaceState(e,
                                "", "#" + e);
                            window.history.pushState(c, "", "#" + c)
                        } catch (h) {}
                        this.navigate_to_dest(c, this.get_containing_page(b));
                        a.preventDefault()
                    }
                },
                navigate_to_dest: function(a, b) {
                    try {
                        var c = JSON.parse(a)
                    } catch (e) {
                        return
                    }
                    if (c instanceof Array) {
                        var h = c[0],
                            d = this.page_map;
                        if (h in d) {
                            for (var f = d[h], h = this.pages[f], d = 2, g = c.length; d < g; ++d) {
                                var k = c[d];
                                if (null !== k && "number" !== typeof k) return
                            }
                            for (; 6 > c.length;) c.push(null);
                            var g = b || this.pages[this.cur_page_idx],
                                d = g.view_position(),
                                d = transform(g.ictm, [d[0], g.height() - d[1]]),
                                g = this.scale,
                                l = [0, 0],
                                m = !0,
                                k = !1,
                                n = this.scale;
                            switch (c[1]) {
                                case "XYZ":
                                    l = [null === c[2] ? d[0] : c[2] * n, null === c[3] ? d[1] : c[3] * n];
                                    g = c[4];
                                    if (null === g || 0 === g) g = this.scale;
                                    k = !0;
                                    break;
                                case "Fit":
                                case "FitB":
                                    l = [0, 0];
                                    k = !0;
                                    break;
                                case "FitH":
                                case "FitBH":
                                    l = [0, null === c[2] ? d[1] : c[2] * n];
                                    k = !0;
                                    break;
                                case "FitV":
                                case "FitBV":
                                    l = [null === c[2] ? d[0] : c[2] * n, 0];
                                    k = !0;
                                    break;
                                case "FitR":
                                    l = [c[2] * n, c[5] * n], m = !1, k = !0
                            }
                            if (k) {
                                this.rescale(g, !1);
                                var p = this,
                                    c = function(a) {
                                        l = transform(a.ctm, l);
                                        m && (l[1] = a.height() - l[1]);
                                        p.scroll_to(f, l)
                                    };
                                h.loaded ?
                                    c(h) : (this.load_page(f, void 0, c), this.scroll_to(f))
                            }
                        }
                    }
                },
                scroll_to: function(a, b) {
                    var c = this.pages;
                    if (!(0 > a || a >= c.length)) {
                        c = c[a].view_position();
                        void 0 === b && (b = [0, 0]);
                        var e = this.container;
                        e.scrollLeft += b[0] - c[0];
                        e.scrollTop += b[1] - c[1]
                    }
                },
                get_current_view_hash: function() {
                    var a = [],
                        b = this.pages[this.cur_page_idx];
                    a.push(b.num);
                    a.push("XYZ");
                    var c = b.view_position(),
                        c = transform(b.ictm, [c[0], b.height() - c[1]]);
                    a.push(c[0] / this.scale);
                    a.push(c[1] / this.scale);
                    a.push(this.scale);
                    return JSON.stringify(a)
                }
            };
            pdf2htmlEX.Viewer = Viewer;
        })();
    </script>
    <script>
        try {
            pdf2htmlEX.defaultViewer = new pdf2htmlEX.Viewer({});
        } catch (e) {}
    </script>
    <title></title>
</head>

<body>
    <div id="sidebar">
        <div id="outline">
        </div>
    </div>
    <div id="page-container">
        <div id="pf1" class="pf w0 h0" data-page-no="1">
            <div class="pc pc1 w0 h0"><img class="bi x0 y0 w1 h1" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKcAAAaVCAYAAADurazyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAEp6SURBVHhe7N1pjN3Vff/xM+MVG2wMmMUGm8XGgIEYGzBbCEucECBAgdKqrZS0VSJF5EH7oK36oE0edVFVqVIRah/1n0SVmpA0ARJ2EvbNrAabxeyLjW0wxoCNsWfmP+fnn9s0JannzvKxx6+Xepl7z52xZyiKNG+d8z1dff0KAAAAAAR0tx8BAAAAYMSJUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxIhTAAAAAMSIUwAAAADEiFMAAAAAxHT19WufM4qsW7euvPbaa+2rkTNu3Lgyfvz40t29vXt2dXWVMWPGNGv1MXbs2DJhwoTmUT8XAAAA2LOJU6PUd77znfKXf/mX7auRs//++5cZM2aUSZMmNYGqhqnJkyeXQw89tFmfPn16mTVrVpk9e3Y56KCD2q8CAAAA9lTi1Ch17bXXlquvvrp9NXL22muvJkbt2BVVA1V9vvfeezfr9f199tmnHHjggWXmzJnN4+ijjy5HHXVUE7DqTisAAABgzyFOjVKpOLWz6s6qusuq7qCaP39+86iR6rDDDmt2VNX3AAAAgNFPnBqldvU49asmTpzY7Kb67d/+7fLlL3+5nH322XZRAQAAwB7AbX3sErZu3doMcf/xj39c/v7v/758+9vfLo8//nj58MMP288AAAAARiNxil1CT09P2bx5c3n55ZfL/fffX370ox+Vf//3fy933313Wbt2bfM+AAAAMPqIU+xyNm7cWFasWFH+9V//tbl18LHHHisbNmwQqAAAAGAUEqfYZX388cfl5z//efnbv/3bcuedd5bVq1e37wAAAACjhTjFLqnO6a87pd59992ybNmy8h//8R/lwQcfLO+9917zHgAAADA6iFPs8upQ9Ntuu63ccccdZfny5aW3t7d9BwAAANjdiVPs8mqMqsPS6xG/Oii93uwHAAAAjA7iFLu8eoyvBqo6c+rRRx8tN954Y1m1alX7LgAAALA76+r/xd8An1Ho2muvLVdffXX7auAOO+ywMn369DJp0qR2ZefVkFRv3Pvoo4+aj3VO1FAdxTv44IPLueeeW775zW+WxYsXlzFjxrTvAAAAALsjcWqUGmyc+v3f//2yZMmScvjhh7crO2/Lli3l6aefLi+99FJZsWJFeeSRR8onn3zSBKrB/uc2duzYMnny5HLNNdeUyy+/vKN4BgAAAOw6xKlRarBx6k/+5E/KVVddVebNm9eu7LwaoT744IOyadOmZtfUq6++Wu65557y8MMPNzfvDUZ3d3ezW+rP/uzPyu/8zu+UE088sX0HAAAA2B2N+Xa/9jmjyNKlS8tNN93Uvhq4c845p5x66qll1qxZZa+99hrQo+5mmjZtWjnwwAPLjBkzyuzZs8sBBxxQ9tlnn2bnVD3qVwecd6J+fY1f9c+eOXNmOfbYY9t3AAAAgN2RgegMq3oMr4aq8847r/zhH/5h+drXvlbmzp3bRKzBWLlyZXnxxRfbVwAAAMDuSpxixBx00EHl85//fLnyyivLwoUL29XO1DBVZ1oBAAAAuzdxihEzbty45nhfvW1vwYIFZcKECc0MqU7UeVbr168va9asKVu3bm1XAQAAgN2NOMWIqjFq/vz55YQTTigHH3xwE6w6VQPV6tWrm5sAAQAAgN2TOMWImzhxYjnqqKPKGWec0QxP79S2bduaQNXT09OuAAAAALsbcYqIetPeSSedNKjB6Dtu7qsfAQAAgN2TOEXEvvvuW2bPnj2oY30AAADA7k+cIqJGqbprqtOB6AAAAMDooAwQMXXq1HLYYYfZOQUAAAB7OHGKiDrEvN6yZ14UAAAA7NnEKSI2btxY3nrrrbJ169Z2ZeC6urqaY4H1IwAAALB7EqeI2LRpU3n33XfLtm3b2pWBGzt2bJk8eXIZM2ZMuwIAAADsbsQpItatW1eee+65smXLlnZl4CZNmlRmzJhRxo8f364AAAAAuxtxihFXj/K99tpr5bHHHiubN29uVwemhqn99tuvTJ8+3VB1AAAA2I2JU4y4DRs2lBUrVpQHHnigOd7XiXrT36GHHtq+AgAAAHZX4hQjqu6a+ulPf1ruu+++5ra+3t7e9p2BmTNnTjnqqKPaVwAAAMDuSpxiRPT09JS1a9eW+++/v/zsZz8rTz/9dPtOZ+bOndsEKgAAAGD3Jk4xrPr6+pow9eGHH5alS5eWf/iHfyj33HNPefvtt9vPGJiurq7mdr4ap+ycAgAAgN2fOMWwqUf43nrrrXLTTTeVb33rW+Vv/uZvmkD1/vvvt58xcHUI+jnnnFOOPvroMmXKlHYVAAAA2F119dWtLYw61157bbn66qvbVwP3la98pVxwwQXliCOOaFd2Tp0jVW/gq4PO161b19zK98ILL5THH3+8vPHGG837gzFv3rzyjW98o1x88cV2TgEAAMAoIE6NUoONU6eccko55phjmp1KA1GP77377rvlnXfeKS+//HJZtWpV+87gTZo0qXz2s58t11xzTXNT38SJE9t3AAAAgN2VODVKDTZOTZ48uUyYMKGMHTu2Xdk5db5UfWzbtq1s2bKlOdo3VM4666xyxRVXlK997WtNqKrzpwAAAIDdmzg1Sg02Tu1K6g6pejPf7/7u75ZLL720HHfccaW727g0AAAAGA38hs8ure7gOvzww8uFF15YlixZUo4//nhhCgAAAEYRv+WzS5s1a1YTpuoQ9IULF7arAAAAwGghTrFLqrOuTj311OYo3x/8wR+Ugw8+eMDzrwAAAIBdnzjFLqUGqEMOOaS5le/yyy8vF110UTnppJPczAcAAACjlDhFXL11r86RGjduXNlnn32aHVN//ud/3tzKt2jRovazhlZvb+9/3So42Ef9swAAAIDOuK1vlNqdbuubMGFCs1vqjDPOaHZM1Z1S9Xa+qVOnDstRvi1btpRXXnmleaxbt65d7czee+/dfO92dwEAAEBnxKlRaneKU+PHjy/z588vf/qnf9oEqjoEve6iGi41SH33u98ty5YtK2vXrm1XO3PiiSeWc889t5x99tll0qRJ7SoAAACws8SpUWp3ilPVySefXP7pn/6pHHfccWXatGnt6tD7+OOPyzPPPFO++c1vlhUrVpQPPvigfWdg6lHEGtXqwPZ6k+CCBQuaHWAAAADAwJg5xS6h7mC67rrrymuvvdauDI9nn322XH/99eX1118vmzZtalcHru7sOuqoo8rChQvLCSec0IQqAAAAYODsnBqlBrtz6ogjjmhmKU2ePLld+fXeeeed8txzz5VPPvmkGTLeiTq7qR7n+/a3v93c0DccR+Tq91cD2DXXXFOeeuqpsnnz5vadgauD2+uOqSuuuKIZ4A4AAAB0RpwapQYbp2ogOv3008uMGTPalV9v5cqV5ac//Wl59dVXOz4mt8Nf//Vfl9/7vd8r8+bNa1eGRr1Rr+6W+pd/+Zfyz//8z83xvk5v2ashre6a+sd//MeyePHi5jUAAADQmTHfrltVGHWWLl1abrrppvbVwF122WXNrqDzzjuvObb2mx4zZ84sY8aMKS+99FJZv359+yd0pt7Ot++++za33w2lumvqlltuKbfffnuzy2swjj322HLllVc2g9APPPDAdhUAAADohJlTfKoam+ocpTrk+/96zJ49u1xyySXNjXv77bdf+yd0pg4rv//++8sLL7wwqGN3v2zLli1l9erVTZyqx/nqZsFONwxOnDixzJkzp1x44YXlgAMOaFcBAACATolTDFqdv1R3E5155pll7ty57Wpn1qxZU5YtW1buvvvusmHDhnZ1cOpMrIcffrg8+eSTTaQajPrzLVq0qPl5h2MuFgAAAOxpxCmGRD2Od8EFFzRzqurzrq6u9p2Bq7OhfvSjH5W333674x1OO9Svf+WVV8p//ud/lnXr1rWrA1d/nrqb7Pzzz2+O8+21116D+hkBAACA7cQphkQNNYcffngzK2rBggVNvOlU3TFVj/c9/fTTg97ptHbt2iHZiVV3hx1//PHls5/9bLNrCgAAABga4hRDpt5ad+KJJ/7XPKa6g6oTdXh5PYp32223NTOiBuPxxx8vDz74YHNcsP65naqDz+tcreOOO65MnTq1XQUAAAAGS5xiSNWZTBdffHE58sgjy+TJk9vVgdu6dWsTp2pY+uijj0pvb2/7zs6pn//xxx83O6YeeuihdrUzdRdY/Xmuuuqqcuihh7arAAAAwFAQpxhSNeTMmjWrLFmyZFDD0eusqPfee68sX768CVQDvbmvBq36tfV44BtvvNGuduboo48uZ5xxRhOoDEEHAACAoSVOMaS6u7vLvvvu2xztq/OnpkyZ0qwNVI1T27ZtK88++2y5+eabm2N+PT097bv/tzr8/MYbb2yGoW/ZsqVdHZj6fU+cOLEJUzW21fDWyc8CAAAA/Hp+02bITZgwoRmKfuqppza7juotd52qu57uvffe8vzzz+/0QPMPPvigrFy5stxyyy2DGqhef466W+q0004rCxcudDsfAAAADANximFT41SdPzV+/Ph2ZeDq8bzXX3+9mT/18ssvt6u/WQ1TNWjV2/7ef//9dnXg6g6wSy+9tLmlr+6gAgAAAIaeOMWwmT17dlm8ePGgbrirx/s2btxY7rjjjuaI384c0XviiSfKz3/+8+Z2voEOUt+hfr/z5s0rX/rSl5rdUwAAAMDwEKcYNjXwHHPMMeWiiy4a1C13NUi98MIL5cknn2x2Rf264FRv+KszpmqcWrFiRcdhqjr88MPL2WefXebPn9/soAIAAACGhzjFsJoxY0b54z/+42b31Lhx49rVgamRqd7W98gjj5Q777yziVCfps6aqjusli1b1hzn6yRO1blSY8eObWZmXXbZZWXvvfdu3wEAAACGgzjFsKpBavr06eXcc88tZ555ZrvameXLl5e77rqrGXL+q8f7arB6++23y/XXX1+ee+65dnXgapiqu6UWLVpU5s6d23FQAwAAAHaOOMWwqjuR6q139ca7+qjPu7s7+8+u3tZXb+279dZb/9ctfPX1o48+2syleu+999rVgam3Cu6zzz7l/PPPLyeffHKza8oNfQAAADC8xClGxLHHHltOOeWUMmvWrEHdfLdmzZry/e9/v5lBVQeeVz09Pc3reqRv/fr1Zdu2bc36QE2aNKn5/r7whS80N/QBAAAAw0+cYkTUHVN17tRXv/rVZg5Vp+rNfUuXLm2Go7/xxhvNWt0pVV/XG/o2bdrUrHXisMMOKxdeeGGZM2dOmTx5crsKAAAADCdxihFRj8fVKPWlL32pnHDCCeWAAw5o3xmYuivqww8/LA8++GB57LHHmllT9XkNVuvWret411Q9wld3S/3Wb/1WOeiggzo+eggAAAAMjN/AGTFTpkxpho2fddZZze6kwag7pWqUevXVV8vtt99ennrqqeaYXyc39FVHHnlkM2dqx6wpAAAAYGSIU4yoehveRRdd1AxHH4zXX3+9PPTQQ+WGG25o4tSLL77YvtOZz3/+8+Wcc85pXwEAAAAjRZxiRNXjcjNnziwnnXRSOfXUU5sh5J2oO6TqEPTvfe975a233mqGonei7pLaMax9sLu5AAAAgIETpxhxNQideOKJzfyp/fbbr4wZM6Z9Z2DqzXz1ON8HH3zQrgzcgQceWL785S8386amTZvWrgIAAAAjRZwiot7cd/nllzc35E2cOLFdHVnjxo0rRxxxRPn6179ejjrqqHYVAAAAGEniFBE1DNVb8S655JLmWF3CokWLyhe/+MVy8MEHlwkTJrSrAAAAwEgSp4jo6uoqU6dOLV/4whea+VP1SF2dRzUS6t9TY9TChQvL2Wef3cy9Gqm/GwAAAPif/EY+Su21115l+vTpHT8mT57c3Kw3nOpxvhqI6mD0uXPndjx7aqDqrq1DDz20iWJ19lUNZQAAAEBGV1+/9jmjyH333Veuu+669tXALVmypLnBrh69G25PP/10+clPflL+7u/+rmzatKldHT71GN8f/dEflSuuuKIJVOIUAAAA5IhTo9SaNWvKK6+80r4auJkzZ5YDDjig2YE13N5///3y4IMPlm9961vlhRdeKBs2bGjfGXr1+GANUn/1V39VPvOZz7ihDwAAAMLEKXYJNaT927/9W/nxj39cnn322dLT09O+M7QWLFhQLrvssnL11Vc38Q0AAADIMnOKXcIhhxxSvvrVr5bjjjtuWG/Oq7ulrrzyyjJlypR2BQAAAEgSp9gljB8/vpkFdcYZZzTH7oZaHYJe/9xFixaVWbNmDfuwdwAAAGDniFPsErq7u8ukSZPKmWeeWRYvXtyuDp0ap84666wmUO2zzz7N3wcAAADk+Q2dXUo9dlcfQ63GqdNPP70cc8wx7QoAAACwKxCn2KU88MADzWOobd26tdx3331lxYoV7QoAAACwKxCn2CXU2/k2btxY7r///vLII4+0q0NnR5x69NFHy/r160tvb2/7DgAAAJAkTrFL2LRpU3n++efLww8/XJ577rl2dejUOLVs2bLmz3/22WfLli1b2ncAAACAJHGKXcLq1avL//t//685djec4eipp54qP/zhD8sHH3zQrgAAAABJ4hRx7777blm+fHm55557ypo1a4b1yN2qVaua3VP16GD9uwAAAIAscYq4epyvhqkXX3xx2Hc01T//pZdeKrfddlvz0ewpAAAAyBKniLv33nubo3Z1LtRIeP/998sNN9xQnn766fLxxx+3qwAAAECCOEXMhx9+WG655ZaydOnS8s4774zYLqYawdauXdv8vQ899JDdUwAAABAkThFRg9B7773XxKk6b6ruYOrr62vfHV717968eXMTp+66666ycePG0tPT074LAAAAjCRxiogah958881y9913l1deeaVdHVnLli0rd955Z/P3b9q0qV0FAAAARpI4RUSd9/T973+/rF69esRmTX2a119/vVxzzTXlhRdeaFcAAACAkSROMeLqvKdHH3202bVUh5N3OvNpypQpZc6cOWXSpEntysCtX7++/OIXvyhPPfVUWbNmTbsKAAAAjBRxihFVZzvVGVOPPPJIeeaZZzq+LW/ixInlyCOPLEuWLCkzZswoEyZMaN8ZmHqcrx7re/jhh5vvy3B0AAAAGFniFCOqHuH72c9+1tySNxiHHXZYueCCC8pf/MVflM997nPl4IMPbt/pzB133NE8aqwSqAAAAGDkiFOMmHXr1jUD0B9//PFm1tRgnHrqqeWss84qhxxySDn//PPL8ccf377Tmfr91KN99957b3PUEAAAABgZ4hQjou5Geu2118pPfvKTsnLlyvLhhx+27wzMuHHjyrRp08opp5xSTjzxxDJ27NiyePHismjRonLQQQc1rztRbw98/vnnyw033NCEqm3btrXvAAAAAMNJnGJEbNmypbkR7wc/+MGgBo/vvffeZf78+eWEE05ojvZ1d3eXI444oglUp5122qCGo9fZUz/84Q+b7/Ojjz5qVwEAAIDhJE4xIupxvttvv7188MEHzVD0Th166KHlG9/4Rpk3b167UkpXV1c57rjjykUXXdTEq07V3V115tSNN97Y3CYIAAAADD9ximFVB6CvXbu2meVUh6DX150OHJ8+fXoToc4+++zm+S+rA9Hr0b66q2r//fdvVwfuk08+Kffff38Tp959913D0QEAAGCYiVMMqzpbqg4ar2Hqueeea1cHpu6Mqsf36m6p008/vRx44IFl/Pjx7bvbTZw4sTnm98UvfrHMmTOn+Zr6GKg6a6rOnnrsscfK8uXLm1gFAAAADB9ximFVd03VOU6vvvpquzJwNUzttddezQ199Wa+Xzf0fOrUqeWSSy5p5lHVzx+MpUuXlu9973tl48aN7QoAAAAwHMQphs3bb79dnnjiifLAAw80kapTNTSddNJJZeHChc3w8xqrPk29yW/27NllwYIFzfG/X/d5O6N+7/Vo33333VdWrVrVrgIAAABDTZxiWNRZTStWrCi/+MUvyksvvdQc7+tEDUxTpkxpdkwdf/zxZfLkye07/1s9xleP+9U4deaZZzZRa8yYMe27A/Pxxx+XN998s9xwww3NccR63A8AAAAYeuIUQ66vr69s3ry52XVUb74bzNymuhuqDj9fsmRJOeqoo9rV36xGrHPOOacZkj5hwoR2deDqkb56w+CyZcvKhg0b2lUAAABgKIlTDLlNmzaVu+66qznS98477wzqxrujjz66XHzxxc1xvUmTJrWrv9nee+9d5s6d23zdzJkz29WBq7ul6vdfb++7++67m+gGAAAADC1xiiG1devWZl7TzTff3Bzrq687iTr1iF7d9VSHm1900UVlv/322+kZUvUo34wZM5rh6HW3VafD0WtUq7u+6s199XhiDVX15wEAAACGjjjFkHr//febGU233nprWblyZbs6cDVOTZs2rcyfP7+cdtppO71raof6tfVoX41b9VjgYNSbButw9Hq8z+19AAAAMLTEKYbUM888U37wgx+U9957b1DH4OqsqbpjavHixU2o6kT9uvPOO6+JVINRf44aqK655ppmuDsAAAAwdMQphkQNOG+99VZzBK4OQu/0dr6qHsOrs6I+97nPlWOPPbZd7cxnPvOZcsopp5SDDjqoucmvUzW21Z/r8ccfL6tWrWpXAQAAgMESpxgSPT09TZh66KGHyssvv1y2bNnSvjNwdb7UwoULy0knndTMjhqMQw45pDkauGDBgmZQeqfq7Kk6c2pHoDIcHQAAAIaGOMWg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AAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABixCkAAAAAYsQpAAAAAGLEKQAAAABiuvr6tc/p19XV1T4DAAAAyNiTco04BRC0I4j7n2IAAGBP5VgfAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADHiFAAAAAAx4hQAAAAAMeIUAAAAADFdff3a5/Tr6upqnwEAAABk7Em5RpwCCNoRxP1PMQAAsKdyrA8AAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhxCgAAAIAYcQoAAACAGHEKAAAAgBhx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"
                />
                <div class="c x1 y1 w2 h2">
                    <div class="t m0 x2 h3 y2 ff1 fs0 fc0 sc0 ls0 ws0">No tests<span class="_ _0"></span> prescri<span class="_ _0"></span>bed.</div>
                </div>
                <div class="c x3 y3 w3 h4">
                    <div class="t m0 x4 h3 y4 ff1 fs0 fc0 sc0 ls0 ws0"> </div>
                    <div class="t m0 x5 h5 y5 ff1 fs1 fc1 sc0 ls0 ws0"><span class="fc2 sc0">D</span><span class="fc2 sc0">r</span><span class="fc2 sc0">.</span><span class="fc2 sc0"> </span><span class="fc2 sc0">S</span><span class="fc2 sc0">u</span><span class="fc2 sc0">p</span><span class="fc2 sc0">r</span>
                        <span
                            class="fc2 sc0">i</span><span class="fc2 sc0">y</span><span class="_ _0"></span><span class="fc2 sc0">a</span><span class="fc2 sc0"> </span><span class="fc2 sc0">C</span><span class="fc2 sc0">l</span><span class="fc2 sc0">i</span><span class="fc2 sc0">n</span>
                            <span
                                class="fc2 sc0">c</span><span class="fc2 sc0"> </span><span class="fc2 sc0">(</span><span class="fc2 sc0">M</span><span class="fc2 sc0">a</span><span class="_ _0"></span><span class="fc2 sc0">m</span><span class="fc2 sc0">a</span><span class="fc2 sc0">n</span>
                                <span
                                    class="fc2 sc0">g</span><span class="fc2 sc0"> </span><span class="fc2 sc0">L</span><span class="fc2 sc0">e</span><span class="fc2 sc0">i</span><span class="fc2 sc0">k</span><span class="_ _0"></span><span class="fc2 sc0">a</span>
                                    <span
                                        class="fc2 sc0">i</span><span class="fc2 sc0">,</span><span class="fc2 sc0"> </span><span class="fc2 sc0">I</span><span class="fc2 sc0">m</span><span class="fc2 sc0">p</span><span class="fc2 sc0">h</span><span class="fc2 sc0">a</span>
                                        <span
                                            class="fc2 sc0">l</span><span class="fc2 sc0">)</span></div>
                    <div class="t m0 x6 h5 y6 ff1 fs1 fc1 sc0 ls0 ws0"><span class="fc2 sc0">M</span><span class="fc2 sc0">a</span><span class="fc2 sc0">m</span><span class="fc2 sc0">a</span><span class="fc2 sc0">n</span><span class="fc2 sc0">g</span><span class="fc2 sc0"> </span><span class="fc2 sc0">L</span>
                        <span
                            class="_ _0"></span><span class="fc2 sc0">e</span><span class="fc2 sc0">i</span><span class="fc2 sc0">k</span><span class="fc2 sc0">a</span><span class="fc2 sc0">i</span><span class="fc2 sc0">,</span><span class="fc2 sc0"> </span><span class="fc2 sc0">I</span>
                            <span
                                class="fc2 sc0">m</span><span class="fc2 sc0">p</span><span class="fc2 sc0">h</span><span class="_ _0"></span><span class="fc2 sc0">a</span><span class="fc2 sc0">l</span><span class="fc2 sc0">,</span><span class="fc2 sc0"> </span><span class="fc2 sc0">M</span>
                                <span
                                    class="fc2 sc0">a</span><span class="fc2 sc0">n</span><span class="fc2 sc0">i</span><span class="fc2 sc0">p</span><span class="fc2 sc0">u</span><span class="_ _0"></span><span class="fc2 sc0">r</span><span class="fc2 sc0"> </span>
                                    <span
                                        class="fc2 sc0">-</span><span class="fc2 sc0"> </span><span class="fc2 sc0">7</span><span class="fc2 sc0">9</span><span class="fc2 sc0">5</span><span class="fc2 sc0">0</span><span class="fc2 sc0">0</span><span class="fc2 sc0">1</span>
                                        <span
                                            class="fc2 sc0">,</span><span class="fc2 sc0"> </span><span class="_ _0"></span><span class="fc2 sc0">I</span><span class="fc2 sc0">n</span><span class="fc2 sc0">d</span><span class="fc2 sc0">i</span><span class="fc2 sc0">a</span></div>
                    
                <div class="t m0 x7 h3 y7 ff1 fs0 fc0 sc0 ls0 ws0">${doctor_Name}<span class="_ _0"></span><span class="_ _0"></span></div>
                <div class="t m0 x8 h3 y8 ff1 fs0 fc0 sc0 ls0 ws0">${doctor_Degree}</div>
                <div class="t m0 x9 h3 y9 ff1 fs0 fc0 sc0 ls0 ws0">${doctor_Specialization}<span class="_ _0"></span></div>
                <div class="t m0 xa h3 ya ff1 fs1 fc1 sc0 ls0 ws0">Registration No:  ${doctor_RegistrationNumber}<span class="_ _0"></span></div>
                <div class="t m0 xb h3 yb ff1 fs1 fc1 sc0 ls0 ws0">${doctor_Address}<span class="_ _0"></span></div>
        
                <div class="t m0 xc h3 yc ff1 fs0 fc1 sc0 ls0 ws0">Patient D<span class="_ _0"></span>etails</div>
                <div class="t m0 xc h3 yd ff1 fs0 fc0 sc0 ls0 ws0">${patient_Name}<span class="_ _0"></span><span class="_ _0"></span></div>
                <div class="t m0 xc h3 ye ff1 fs0 fc0 sc0 ls0 ws0">${patient_Age}<span class="_ _0"></span>, <span class="_ _2"></span>${patient_Sex}</div>
                <div class="t m0 xc h3 yf ff1 fs0 fc1 sc0 ls0 ws0">Address<span class="_ _0"></span>:${patient_Address}</div>
                <div class="t m0 xc h3 y10 ff1 fs0 fc1 sc0 ls0 ws0">Ph No.:${patient_MobileNumber}</div>
                <div class="t m0 xd h3 yd ff1 fs0 fc0 sc0 ls0 ws0"> </div>
                <div class="t m0 xe h3 yc ff1 fs0 fc1 sc0 ls0 ws0">Ref no:<span class="_ _3"> </span><span class="fc0"> <span class="_ _2"></span>${referenceNumber}<span class="_ _0"></span> </span>
                </div>
                <div class="t m0 xe h3 yd ff1 fs0 fc1 sc0 ls0 ws0">Date &amp; <span class="_ _0"></span>Time:<span class="_ _3"> </span><span class="fc0"> ${Date} <span class="_ _0"></span>${time}</span>
                </div>
            </div>
            <div class="c xf y11 w4 h6">
                <div class="t m0 x0 h3 y12 ff1 fs0 fc1 sc0 ls0 ws0">Sympto<span class="_ _0"></span>ms(HOP<span class="_ _0"></span>I):</div>
                <div class="t m0 x0 h3 y13 ff1 fs0 fc0 sc0 ls0 ws0">${symptoms}<span class="_ _0"></span><span class="_ _0"></span></div>
                <div class="t m0 x0 h3 y14 ff1 fs0 fc1 sc0 ls0 ws0">Provisi<span class="_ _0"></span>onal Dia<span class="_ _0"></span>gnosis:</div>
                <div class="t m0 x0 h3 y15 ff1 fs0 fc0 sc0 ls0 ws0">${diagnosis}<span class="_ _0"></span></div>
            </div>
            <div class="c x3 y3 w3 h4">
                <div class="t m0 x10 h3 y16 ff1 fs0 fc0 sc0 ls0 ws0">Lab Tes<span class="_ _0"></span>ts<span class="_ _4"> </span> <span class="_ _5"> </span>Medicin<span class="_ _0"></span>es</div>
            </div>
            <div class="c x1 y1 w2 h2">
                <div class="t m0 x11 h5 y17 ff1 fs1 fc1 sc0 ls0 ws0">Next Appo<span class="_ _0"></span>intment:</div>
            </div>
            <div class="c x12 y18 w5 h7">
                <div class="t m0 x0 h3 y19 ff1 fs0 fc0 sc0 ls0 ws0">1.</div>
            </div>
            <div class="c x13 y1a w6 h8">
                <div class="t m0 x0 h5 y1b ff1 fs1 fc0 sc0 ls0 ws0">Take when in need<span class="_ _0"></span> </div>
                <div class="t m0 x0 h5 y1c ff1 fs1 fc0 sc0 ls0 ws0">for ${duration} days<span class="_ _0"></span> </div>
                <div class="t m0 x0 h5 y1d ff1 fs1 fc0 sc0 ls0 ws0">After food </div>
            </div>
            <div class="c x14 y18 w7 h7">
                <div class="t m0 x0 h3 y19 ff1 fs0 fc0 sc0 ls0 ws0">${tabletName}<span class="_ _0"></span></div>
                <div class="t m0 x0 h3 y1e ff1 fs0 fc1 sc0 ls0 ws0">${drugName}<span class="_ _0"></span><span class="_ _0"></span></div>
                <div class="t m0 x0 h9 y1f ff2 fs0 fc1 sc0 ls0 ws0">Tablet</div>
            </div>
            <div class="c x1 y1 w2 h2">
                <div class="t m0 x15 h5 y20 ff3 fs1 fc0 sc0 ls0 ws0">***** Note:<span class="_ _0"></span> <span class="_ _2"></span><span class="ff1">Substitution allo<span class="_ _0"></span>wed where<span class="_ _0"></span>ver applic<span class="_ _0"></span>able.<span class="_ _6"></span><span class="ff3"> *****</span></span>
                </div>
                <div class="t m0 x11 h5 y21 ff1 fs1 fc1 sc0 ls0 ws0">General In<span class="_ _0"></span>structions:</div>
                <div class="t m0 x16 h3 y22 ff1 fs0 fc0 sc0 ls0 ws0">${doctor_Name}<span class="_ _0"></span><span class="_ _0"></span></div>
                <div class="t m0 x17 h3 y23 ff1 fs0 fc0 sc0 ls0 ws0">${doctor_Degree}</div>
                <div class="t m0 x18 h3 y24 ff1 fs0 fc0 sc0 ls0 ws0">${doctor_Specialization}<span class="_ _0"></span></div>
                <div class="t m0 x0 ha y25 ff1 fs2 fc0 sc0 ls0 ws0">Disclaimer: </div>
                <div class="t m0 x19 ha y26 ff1 fs2 fc0 sc0 ls0 ws0">1<span class="_ _0"></span>. <span class="_ _7"> </span>The informatio<span class="_ _0"></span>n and advice prov<span class="_ _0"></span>ided here is prov<span class="_ _0"></span>isional in nature<span class="_ _0"></span> as it is based on t<span class="_ _0"></span>he limited inform<span class="_ _0"></span>ation made avai<span class="_ _0"></span>lable by the patient<span class="_ _0"></span>.</div>
                <div class="t m0 x19 ha y27 ff1 fs2 fc0 sc0 ls0 ws0">2<span class="_ _0"></span>. <span class="_ _7"> </span>The patient is ad<span class="_ _0"></span>vised to visit in p<span class="_ _0"></span>erson for thoroug<span class="_ _0"></span>h examination at t<span class="_ _0"></span>he earliest.</div>
                <div
                    class="t m0 x19 ha y28 ff1 fs2 fc0 sc0 ls0 ws0">3<span class="_ _0"></span>. <span class="_ _7"> </span>The informatio<span class="_ _0"></span>n is confidential in<span class="_ _0"></span> nature and for rec<span class="_ _0"></span>ipient&apos;s use only<span class="_ _0"></span>.</div>
            <div
                class="t m0 x19 ha y29 ff1 fs2 fc0 sc0 ls0 ws0">4<span class="_ _0"></span>. <span class="_ _7"> </span>The Prescrip<span class="_ _0"></span>tion is generated o<span class="_ _0"></span>n a Teleconsulta<span class="_ _0"></span>tion</div>
        <div class="t m0 x19 ha y2a ff1 fs2 fc0 sc0 ls0 ws0">5<span class="_ _0"></span>. <span class="_ _7"> </span>Not valid for m<span class="_ _0"></span>edico-legal purp<span class="_ _0"></span>ose</div>
    </div>
    </div>
    <div class="pi" data-data='{"ctm":[1.500000,0.000000,0.000000,1.500000,0.000000,0.000000]}'></div>
    </div>
    </div>
    <div class="loading-indicator">
        <img alt="" src="data:image/png;base64,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"
        />
    </div>
    <!-- Code injected by live-server -->
    <script>
        // <![CDATA[  <-- For SVG support
        if ('WebSocket' in window) {
            (function() {
                function refreshCSS() {
                    var sheets = [].slice.call(document.getElementsByTagName("link"));
                    var head = document.getElementsByTagName("head")[0];
                    for (var i = 0; i < sheets.length; ++i) {
                        var elem = sheets[i];
                        var parent = elem.parentElement || head;
                        parent.removeChild(elem);
                        var rel = elem.rel;
                        if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                            var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                            elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                        }
                        parent.appendChild(elem);
                    }
                }
                var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
                var address = protocol + window.location.host + window.location.pathname + '/ws';
                var socket = new WebSocket(address);
                socket.onmessage = function(msg) {
                    if (msg.data == 'reload') window.location.reload();
                    else if (msg.data == 'refreshcss') refreshCSS();
                };
                if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
                    console.log('Live reload enabled.');
                    sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
                }
            })();
        } else {
            console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
        }
        // ]]>
    </script>
</body>

</html>
   
    `;
};
