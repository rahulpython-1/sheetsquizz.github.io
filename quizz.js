const container = document.querySelector(".container");

const score = document.getElementById("obtscore");

const name_id = document.getElementById("name_id");

let count = 0;

let qid = localStorage.getItem("quiz_id");

let nid = localStorage.getItem("name_id");
let sid = localStorage.getItem("sub_id");
let rid = localStorage.getItem("roll_id");

name_id.style.paddingLeft = "10px";

name_id.textContent = `WELCOME--${nid.toUpperCase()}`;

function template(i, p1, o1, o2, o3, o4, checking) {
  let main = document.createElement("div");
  let ques = document.createElement("div");

  let heading = document.createElement("h3");
  let desc = document.createElement("div");

  let p = document.createElement("p");
  let option = document.createElement("div");

  let a1 = document.createElement("a");
  let a2 = document.createElement("a");

  let a3 = document.createElement("a");
  let a4 = document.createElement("a");

  main.setAttribute("class", "main_div");
  main.setAttribute("id", i);
  ques.setAttribute("class", "question");

  heading.setAttribute("align", "center");
  heading.textContent = `Question no ${i}`;
  heading.setAttribute("name", i);

  desc.setAttribute("class", "desc");
  p.textContent = `${p1}`;
  option.setAttribute("class", "options");

  a1.setAttribute("name", o1 + "$" + i);
  a1.setAttribute("href", "#");
  a1.textContent = `${o1}`;
  a1.addEventListener("click", checking);
  a1.style.textDecoration = "none";

  a2.setAttribute("name", o2 + "$" + i);
  a2.setAttribute("href", "#");
  a2.textContent = `${o2}`;
  a2.addEventListener("click", checking);
  a2.style.textDecoration = "none";

  a3.setAttribute("name", o3 + "$" + i);
  a3.setAttribute("href", "#");
  a3.textContent = `${o3}`;
  a3.addEventListener("click", checking);
  a3.style.textDecoration = "none";

  a4.setAttribute("name", o4 + "$" + i);
  a4.setAttribute("href", "#");
  a4.textContent = `${o4}`;
  a4.addEventListener("click", checking);
  a4.style.textDecoration = "none";

  ques.appendChild(heading);
  desc.appendChild(p);

  option.appendChild(a1);
  option.appendChild(a2);

  option.appendChild(a3);
  option.appendChild(a4);

  main.appendChild(ques);
  main.appendChild(desc);

  main.appendChild(option);
  container.appendChild(main);
}

var _0x41e511 = _0x187a;
function _0x187a(_0x47af20, _0x26e8dd) {
  var _0x89644c = _0x2bec();
  return (
    (_0x187a = function (_0x559245, _0x59ad99) {
      _0x559245 = _0x559245 - (0x1c9f + -0x1ae2 + -0x149);
      var _0x3e3515 = _0x89644c[_0x559245];
      return _0x3e3515;
    }),
    _0x187a(_0x47af20, _0x26e8dd)
  );
}
function _0x2bec() {
  var _0xeebfcd = [
    "ser_conten",
    "then",
    "2231202TCkXtM",
    "229656rLfhEi",
    "euserconte",
    "https://sc",
    "nt.com/mac",
    "t_key=",
    "1230388BEoOUW",
    "ript.googl",
    "ros/echo?u",
    "392126KVvXsZ",
    "json",
    "2439IrrFsE",
    "806226kGojeL",
    "657860vgeyiq",
    "64JCYgve",
  ];
  _0x2bec = function () {
    return _0xeebfcd;
  };
  return _0x2bec();
}
((function (_0x542412, _0x3393d3) {
  var _0x2aa8fd = _0x187a,
    _0x56d2ac = _0x542412();
  while (!![]) {
    try {
      var _0x20b9c7 =
        parseInt(_0x2aa8fd(0x83)) / (0xe5f + 0x115 * 0x2 + -0x1088) +
        parseInt(_0x2aa8fd(0x7d)) / (0x304 + -0x242d * -0x1 + 0x599 * -0x7) +
        -parseInt(_0x2aa8fd(0x82)) /
          (-0x1 * -0x1115 + -0x25ac + -0xa4d * -0x2) +
        -parseInt(_0x2aa8fd(0x78)) / (-0x79f * 0x1 + -0x1beb + 0x238e) +
        -parseInt(_0x2aa8fd(0x84)) / (0xb17 * 0x2 + -0x1205 + -0x424) +
        -parseInt(_0x2aa8fd(0x77)) / (0x86d + -0x25b7 + 0x1d50) +
        (parseInt(_0x2aa8fd(0x80)) / (-0x25d9 + 0x5 * 0xa7 + 0x229d)) *
          (-parseInt(_0x2aa8fd(0x74)) /
            (-0x3 * -0x887 + 0x140 * -0x13 + -0x1cd));
      if (_0x20b9c7 === _0x3393d3) break;
      else _0x56d2ac["push"](_0x56d2ac["shift"]());
    } catch (_0x7bc065) {
      _0x56d2ac["push"](_0x56d2ac["shift"]());
    }
  }
})(_0x2bec, -0x1 * -0x8b955 + -0xd32f * -0x6 + -0x19ed * 0x49),
fetch(
  _0x41e511(0x7a) +
    _0x41e511(0x7e) +
    _0x41e511(0x79) +
    _0x41e511(0x7b) +
    _0x41e511(0x7f) +
    _0x41e511(0x75) +
    _0x41e511(0x7c) +
    qid
)[_0x41e511(0x76)]((_0x3e3515) => _0x3e3515[_0x41e511(0x81)]())).then(
  (json) => {
    function checking() {
      score.innerText = count;
      let cor = this.name;
      let index = cor.split("$")[1];

      if (+container.childElementCount === 1) {
        function _0x31bc() {
          const _0x91e866 = [
            "2709855oENwIW",
            "name",
            "12987608tAFsGt",
            "wer",
            "innerText",
            "remove",
            "getElement",
            "11192946TzAjPY",
            "11656575OnbNEi",
            "170197HirvYX",
            "14bdSvkM",
            "417060WRVYtp",
            "4195230FPjzhT",
            "data",
            "correctans",
            "ById",
          ];
          _0x31bc = function () {
            return _0x91e866;
          };
          return _0x31bc();
        }
        function _0x4386(_0x495bb1, _0x2f3c69) {
          const _0x130348 = _0x31bc();
          return (
            (_0x4386 = function (_0x786422, _0x570bc1) {
              _0x786422 = _0x786422 - (-0xaa4 + -0x34 * 0x1a + 0x10c5);
              let _0x41a9ad = _0x130348[_0x786422];
              return _0x41a9ad;
            }),
            _0x4386(_0x495bb1, _0x2f3c69)
          );
        }
        const _0x5eb8b5 = _0x4386;
        (function (_0x5ed88f, _0x3afe91) {
          const _0x258185 = _0x4386,
            _0x5c3bd1 = _0x5ed88f();
          while (!![]) {
            try {
              const _0x593a44 =
                (parseInt(_0x258185(0xe8)) /
                  (0x2050 + -0x2 * -0x669 + -0x2d21)) *
                  (-parseInt(_0x258185(0xd9)) / (0x318 + -0x1982 + 0x166c)) +
                parseInt(_0x258185(0xdb)) / (-0xd * 0x7f + 0x1f45 + -0x18cf) +
                -parseInt(_0x258185(0xda)) / (-0x2515 + 0x82 * 0x2e + 0xdbd) +
                -parseInt(_0x258185(0xdf)) /
                  (-0x69 * 0x4b + 0x1b2f * -0x1 + -0x39f7 * -0x1) +
                -parseInt(_0x258185(0xe6)) /
                  (0x1 * -0x1de4 + -0x1772 + 0x355c) +
                parseInt(_0x258185(0xe7)) / (-0xba6 + 0x50b + -0x236 * -0x3) +
                parseInt(_0x258185(0xe1)) / (-0xf46 + -0x45 * -0x86 + -0x14d0);
              if (_0x593a44 === _0x3afe91) break;
              else _0x5c3bd1["push"](_0x5c3bd1["shift"]());
            } catch (_0x18eda4) {
              _0x5c3bd1["push"](_0x5c3bd1["shift"]());
            }
          }
        })(_0x31bc, -0x6ef3e + -0x11 * -0x303b + 0x12beff);
        if (
          json[_0x5eb8b5(0xdc)][index][_0x5eb8b5(0xdd) + _0x5eb8b5(0xe2)] +
            "$" +
            index ==
          this[_0x5eb8b5(0xe0)]
        ) {
          (index = index - (0x3f * 0x8f + -0x1 * 0x575 + 0x2b * -0xb1)),
            (score[_0x5eb8b5(0xe3)] =
              count + (-0x1 * -0x1b8d + 0x919 + -0x24a5));
          let child = document[_0x5eb8b5(0xe5) + _0x5eb8b5(0xde)](
            index + (0x26ed + 0x1411 + -0x3afd)
          );
          child[_0x5eb8b5(0xe4)](),
            (count = count + (-0x110 * 0xc + 0x1997 + -0x6a * 0x1f));
        } else {
          index = index - (0x249a + 0x1d97 + -0x4230);
          let child = document[_0x5eb8b5(0xe5) + _0x5eb8b5(0xde)](
            index + (0x2 * -0xe66 + 0x1 * 0xdb4 + 0xf19)
          );
          child[_0x5eb8b5(0xe4)]();
        }

        let end_msg1 = document.createElement("h1");
        end_msg1.textContent = "QUIZZ ENDS HERE THANK YOU FOR YOUR RESPONSE";
        container.appendChild(end_msg1);
        localStorage.setItem("count", count);
        window.location.href = "./submission.html";
      } else {
        function _0x31bc() {
          const _0x91e866 = [
            "2709855oENwIW",
            "name",
            "12987608tAFsGt",
            "wer",
            "innerText",
            "remove",
            "getElement",
            "11192946TzAjPY",
            "11656575OnbNEi",
            "170197HirvYX",
            "14bdSvkM",
            "417060WRVYtp",
            "4195230FPjzhT",
            "data",
            "correctans",
            "ById",
          ];
          _0x31bc = function () {
            return _0x91e866;
          };
          return _0x31bc();
        }
        function _0x4386(_0x495bb1, _0x2f3c69) {
          const _0x130348 = _0x31bc();
          return (
            (_0x4386 = function (_0x786422, _0x570bc1) {
              _0x786422 = _0x786422 - (-0xaa4 + -0x34 * 0x1a + 0x10c5);
              let _0x41a9ad = _0x130348[_0x786422];
              return _0x41a9ad;
            }),
            _0x4386(_0x495bb1, _0x2f3c69)
          );
        }
        const _0x5eb8b5 = _0x4386;
        (function (_0x5ed88f, _0x3afe91) {
          const _0x258185 = _0x4386,
            _0x5c3bd1 = _0x5ed88f();
          while (!![]) {
            try {
              const _0x593a44 =
                (parseInt(_0x258185(0xe8)) /
                  (0x2050 + -0x2 * -0x669 + -0x2d21)) *
                  (-parseInt(_0x258185(0xd9)) / (0x318 + -0x1982 + 0x166c)) +
                parseInt(_0x258185(0xdb)) / (-0xd * 0x7f + 0x1f45 + -0x18cf) +
                -parseInt(_0x258185(0xda)) / (-0x2515 + 0x82 * 0x2e + 0xdbd) +
                -parseInt(_0x258185(0xdf)) /
                  (-0x69 * 0x4b + 0x1b2f * -0x1 + -0x39f7 * -0x1) +
                -parseInt(_0x258185(0xe6)) /
                  (0x1 * -0x1de4 + -0x1772 + 0x355c) +
                parseInt(_0x258185(0xe7)) / (-0xba6 + 0x50b + -0x236 * -0x3) +
                parseInt(_0x258185(0xe1)) / (-0xf46 + -0x45 * -0x86 + -0x14d0);
              if (_0x593a44 === _0x3afe91) break;
              else _0x5c3bd1["push"](_0x5c3bd1["shift"]());
            } catch (_0x18eda4) {
              _0x5c3bd1["push"](_0x5c3bd1["shift"]());
            }
          }
        })(_0x31bc, -0x6ef3e + -0x11 * -0x303b + 0x12beff);
        if (
          json[_0x5eb8b5(0xdc)][index][_0x5eb8b5(0xdd) + _0x5eb8b5(0xe2)] +
            "$" +
            index ==
          this[_0x5eb8b5(0xe0)]
        ) {
          (index = index - (0x3f * 0x8f + -0x1 * 0x575 + 0x2b * -0xb1)),
            (score[_0x5eb8b5(0xe3)] =
              count + (-0x1 * -0x1b8d + 0x919 + -0x24a5));
          let child = document[_0x5eb8b5(0xe5) + _0x5eb8b5(0xde)](
            index + (0x26ed + 0x1411 + -0x3afd)
          );
          child[_0x5eb8b5(0xe4)](),
            (count = count + (-0x110 * 0xc + 0x1997 + -0x6a * 0x1f));
        } else {
          index = index - (0x249a + 0x1d97 + -0x4230);
          let child = document[_0x5eb8b5(0xe5) + _0x5eb8b5(0xde)](
            index + (0x2 * -0xe66 + 0x1 * 0xdb4 + 0xf19)
          );
          child[_0x5eb8b5(0xe4)]();
        }
      }
    }
    for (let i = 0; i < json.data.length; i++) {
      template(
        i + 1,
        json.data[i + 1].question,
        json.data[i + 1].option1,
        json.data[i + 1].option2,
        json.data[i + 1].option3,
        json.data[i + 1].option4,
        checking
      );
    }
  }
);
