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

function _0x3da3(){var _0x4160f0=['4556224RyybwM','2lvJmFo','441jMyceu','e.com/macr','59106DjziBQ','https://sc','1028346UZZZKc','/exec','1845924IMOfyN','ript.googl','474705HAGGZL','1294410zQWwfq','29189988kxnqPH','os/s/'];_0x3da3=function(){return _0x4160f0;};return _0x3da3();}function _0x7a7e(_0x3595f1,_0x15ba7a){var _0x27b8e9=_0x3da3();return _0x7a7e=function(_0x2c0428,_0x19ba93){_0x2c0428=_0x2c0428-(-0x1144*0x1+0x24ee+-0x96*0x1f);var _0x1fd4e0=_0x27b8e9[_0x2c0428];return _0x1fd4e0;},_0x7a7e(_0x3595f1,_0x15ba7a);}var _0x5ca3ab=_0x7a7e;(function(_0x2bb701,_0x491ca4){var _0x725a69=_0x7a7e,_0x51321b=_0x2bb701();while(!![]){try{var _0x54c820=-parseInt(_0x725a69(0x188))/(0x1d78+-0x1*0x5ab+-0x17cc)*(parseInt(_0x725a69(0x18d))/(0x6*-0x656+-0x6*0x1ca+0x30c2))+-parseInt(_0x725a69(0x184))/(-0x2d*-0x80+-0x14ee+-0x39*0x7)+-parseInt(_0x725a69(0x186))/(0x1967+-0x879+-0x10ea)+-parseInt(_0x725a69(0x189))/(0xfd8+-0x571+-0xa62)+parseInt(_0x725a69(0x182))/(0x4da*-0x3+0x1543+-0x6af*0x1)*(-parseInt(_0x725a69(0x180))/(0x200a+-0xd83*-0x1+0x2*-0x16c3))+-parseInt(_0x725a69(0x18c))/(0x24cb*0x1+-0x24d9+0x16)+parseInt(_0x725a69(0x18a))/(-0x1184+0x1d7e+-0xbf1);if(_0x54c820===_0x491ca4)break;else _0x51321b['push'](_0x51321b['shift']());}catch(_0x363762){_0x51321b['push'](_0x51321b['shift']());}}}(_0x3da3,0x7*0xb675+-0xd518b+0x7*0x25033),fetch(_0x5ca3ab(0x183)+_0x5ca3ab(0x187)+_0x5ca3ab(0x181)+_0x5ca3ab(0x18b)+qid+_0x5ca3ab(0x185)));.then((response) =>response.json()).then(
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
