import $ from 'jquery';
alert('jQuery version:' + $.fn.jquery);

class Hoge {
  constructor() {
    let a = 1;
    console.log(`Hello es6. a is ${a}`);
  }
}

new Hoge();
