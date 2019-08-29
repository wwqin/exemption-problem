/*************************************************************************************************/
/*MAC终端*/
/*************************************************************************************************/
$(document).ready(function() {
  var title = $("#title");
  var console = $("#console");
  var path = "~";
  var command = "";
  var commands = [{
    "name": "clear",
    "function": clearConsole
  }, {
    "name": "sacc-help",
    "function": help
  }, {
    "name": "sacc-get",
    "function": getlist
  },{
    "name":"sheizuimei",
    "function":sheizuimei
},{
    "name":"sacc-name",
    "function":showname
},{
    "name":"sacc-about",
    "function":showabout
},{
    "name":"sacc-install",
    "function":install
},{
    "name":"sacc-v",
    "function":showv
}];
  function getlist() {
    console.append(`<a href='https://github.com/wwqin/exemption-problem-text' style="color:white">题目地址</a>\n`)
    console.append('<h>第0题：找到所有题目</h>\n')
    console.append(`<h>第3题：MergeSortGoGoGo</h>\n<h>Introduction</h><div class="cc">There are 16, 000, 000 int64 values stored in an unordered array. Please supplement the MergeSort() function defined in mergesort.go to sort this array.<br>
    
Requirements and rating principles:<br>
* (30%) Pass the unit test.<br>
* (20%) Performs better than sort.Slice().<br>
* (30%) Profile your program with pprof, analyze the performance bottleneck.<br>
* (10%) Have a good code style.<br>
* (10%) Document your idea and code.<br></div><h>How to use</h><div class="cc">Please supplement the MergeSort() function defined in mergesort.go to accomplish
the home work.<br>
**NOTE**:<br>
1. There is a builtin unit test defined in mergesort_test.go, however, you still
   can write your own unit tests.<br>
2. There is a builtin benchmark test defined in bench_test.go, you should run
   this benchmark to ensure that your parallel merge sort is fast enough.<br>
3. **github**: https://github.com/big747386/MergeSortGoGoGo

How to test:<br>
make test<br>

How to benchmark:<br>

make bench<br>
</div>\n`)
    console.append(`<h>第4题：Python problem</h>\n<h>Introduction</h><div class="cc">One day, when Boss Wang was socking himself in programming, he suddenly got a call from his girlfriend.
<br>'I wanna have a python as my pet, go and buy one for me ASAP.' She said.
 <br>But Boss Wang was not willing to, so he told her,  ' Look, I have finished my extraordinary programming yesterday, I need some rest.'<br>'Really?', his girlfriend said, 'I have a software which can test whether programming will end correctly with any input or not, Hmmm, bad news, your programming didn't pass it. '<br>'No! you can never have done it. Literally, that's impossible!'<br> 'You should NEVER neglect the power of a girl，go，buy my python.'</div><h>Problem</h>\n<div class="cc">How can Boss Wang's girlfriend produce that software? Is that a easy work or not? 
 <br>Whether Boss Wang would buy a python for his girlfriend?
 <br>Is that lawful to keep a python as pet in China?</div>\n`)
    console.append(`<div class="cc">第5题：通常我们看到的网页一般会有多种表现方式，比如你在电脑打开知乎可能是这个样子，在手机上打开可能又是另一个样子，所以这是怎么实现的呢。简述网页实现自适应的几种方法</div>\n\n`)
    console.append(`<div class="cc">第6题：每当你在浏览器输入www.baidu.com的时候，网页就会被打开，那么，你有没有好奇过当你在浏览器输入URL的时候究竟发生了什么才能让浏览器显示出网页。简述从 URL 输入到页面展现的过程</div>\n\n`)
    console.append(`<div class="cc">第7题：什么是Web Accessibility以及如果实现无障碍网页浏览（简单列举几种方法）</div>\n\n`)
    console.append(`<div class="cc">第8题：尝试着部署一个本地的web服务或者应用，讲一下它的设计模式，组成结构以及消息传递方式，并且尽可能多的讲出其中的原理:）</div>\n\n`)
    console.append(`<div class="cc">第9题：迎新前夕，王老板写完了迎新网页，这时，路过的产品经理小张说道：“你这个让用户等待太久了，点个注册过五六秒才有结果，不行的呀”，王老板狡辩称：“这是后端的锅”。那么，聪明的你能帮助可怜的后端小哥哥完成这个优化吗？(注：注册操作需要验证邮箱，你需要用java完成整个注册流程，只需用户名，不需要写入密码和其他信息，最后要持久化到数据库)</div>\n\n`)
    console.append(`<h>第10题：蟹老板和鱼:）</h>\n<div class="cc" id="game">众所周知海洋中有很多种类的鱼，每种鱼都有自己的口味。所以蟹老板只能准备很多种的食材。可是因为种类实在太多，蟹老板实在太笨，有点记不住。他只能找来了聪明的你来回答他的问题。（蟹老板为了识别食材给了每种食材一个编号）。<br>
    已知蟹老板的操作有<br>
    （1） 询问某种食材有多少个。<br>
    （2） 增加某种食材多少个（可能原来没有这种食材）。<br>
    （3） 拿出某种食材多少个来做菜（可能是全部拿出）。<br>
    （4） 询问目前最少的食材是那一种。<br>
    （5） 把食材a和食材b归为一类（归为一类后原来和食材a一类的也和食材b一类）。<br>
    （6） 某种食材的那一大类食材有多少种食材以及食材一共有多少个。<br>
    ps : 已知海中有些种类的鱼特别多，所以有些操作可能会用很多次。<br>
    注意：<br>
1、实现方法限为C语言、伪代码、不会前两者的可以口头描述。<br>
2、因为蟹老板的客人太多，蟹老板会向你提出很多问题，所以朴素的想法无法解决它的问题。<br>
3、如果有优秀的方法，方法越多分越高，方法的时间越快，空间使用越少评分越高。<br>
4、可以不用实现所有的功能，没有标准答案。<br>
    </div>`)
  }
  function showv(){
      console.append(`<div class="cc">  这已经是SACC度过的第三十二个春夏秋冬了，我们这一路经历过暖春也经历过寒冬，还好现在你来了，希望未来的一年中你能在科协这个大家庭中结交志同道合的朋友，从科协牛人中获取经验，成为技术上的大牛，或者在科协活动的举办中锻炼自己的活动组织能力。</div>`);
  }
  function install(){
      let user=prompt("请输入你的名字~");
      console.append(`<div class="cc">${user}同学你好：<br>  首先祝贺你正式成为计软网安院科协的一员，从加入院科协的那一刻开始，你将经历一段从没经历和感受过的奇妙旅程。我们希望未来的一年中你能在科协这个大家庭中结交志同道合的朋友，从科协牛人中获取经验，成为技术上的大牛，或者在科协活动的举办中锻炼自己的活动组织能力。我们更希望一年后的你能像我们一样在科协为未来的学弟学妹提供技术和学习上的帮助。 愿初来南邮的你，在未来的一年中能在计软网安院科协这片沃土上，施展自己的才华，活出自己的精彩。(๑•̀ㅂ•́)و✧</div>`);
  }
  function showabout(){
      console.append(`<div class="cc">计算机学院科协成立于1987年，是计算机学院分团委领导下以科学技术交流为目的的学生组织，其宗旨在于营造科技氛围，提高科技素质，造就科技人才。该协会以学院的特色专业为依托，结合学院专业学科及学生的实际情况，围绕当今科技领域的热点问题，积极组织在校学生参加科技活动，开展技术交流，培养学生的脑力思维，提高科技认知能力及动手能力。</div>`);
  }
  function showname(){
      console.append("<div class='cc'>Our name is Science Association of Computer College</div>");
  }
  function sheizuimei(){
      console.append("她是关校花\n她的美惊世骇俗\n她的美惊天动地\n");
  }
  function help() {
    console.append("There is help.\n<h id='sacc-about'>    sacc-about          关于我们</h>\n<h id='sacc-name'>    sacc-name           我们是谁！</h>\n<h id='sacc-install'>    sacc-install        安装sacc</h>\n<h id='sacc-v'>    sacc-v              查看sacc版本</h>\n<h id='sacc-get'>    sacc-get            查看免试题题目</h>\n<h id='clear'>    clear               清屏</h>\n >:)\n");
  }
  function clearConsole() {
    console.text("");
  }
  function processCommand() {
      var isValid = false;
      for (var i = 0; i < commands.length; i++) {
          if (command == commands[i].name) {
              commands[i].function();
              isValid = true;
              break;
          }
      }
      if (!isValid) {
          console.append("sacc: command not found: " + command + "\n");
      }
  }

  function displayPrompt() {
      console.append("<span class='prompt' style='-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;'>➜</span> ");
      console.append("<span class='path'>" + path + "</span> ");
  }

  $(document).keydown(function(e) {
      if (e.keyCode === 8 && e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA') {
          e.preventDefault();
          if (command !== "") {
              command = command.slice(0, -1);
              console.html(console.html().slice(0, -1));
          }
      }
  });
  $(document).keypress(function(e) {
      e = e || window.event;
      var keyCode = typeof e.which == "number" ? e.which : e.keyCode;
      if (e.which == 13) {
          console.append("\n");
          processCommand();
          displayPrompt();
          command = "";
      } else {
          var keyString = String.fromCharCode(keyCode);
          console.append(keyString);
          command += keyString;
      }
  });
  title.text("sacc. marc@mbp: ~ (zsh)")
  var date = new Date().toString();
  date = date.substr(0, date.indexOf("GMT") - 1);
  console.append("<div class='cc'>Last login: " + date + " on sacc</div>\n");
  console.append("There is help.\n<h id='sacc-about'>    sacc-about          关于我们</h>\n<h id='sacc-name'>    sacc-name           我们是谁！</h>\n<h id='sacc-install'>    sacc-install        安装sacc</h>\n<h id='sacc-v'>    sacc-v              查看sacc版本</h>\n<h id='sacc-get'>    sacc-get            查看免试题题目</h>\n<h id='clear'>    clear               清屏</h>\n >:)\n");
  console.append("PS:移动端直接点击命令即可\n")
  displayPrompt();
});
document.onkeydown = function(event){ 
  var e = event || window.event; 
  var k = e.keyCode || e.which; 
  switch(k) { 
      case 32:      return false;//空格键
  }
  e.cancel = true;
};
$("#sacc-about").on("touchstart", function(e) {
  console.log(123)
  showabout();
});
$("#window").on("touchstart", function(e) {
  console.log(e.target.id)
  switch(e.target.id){
    case 'sacc-about': {
      $("#console").append(`<div class="cc">计算机学院科协成立于1987年，是计算机学院分团委领导下以科学技术交流为目的的学生组织，其宗旨在于营造科技氛围，提高科技素质，造就科技人才。该协会以学院的特色专业为依托，结合学院专业学科及学生的实际情况，围绕当今科技领域的热点问题，积极组织在校学生参加科技活动，开展技术交流，培养学生的脑力思维，提高科技认知能力及动手能力。</div>`);
      $("#console").append("<span class='prompt' style='-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;'>➜</span> ");
      $("#console").append("<span class='path'>" + "~" + "</span> ");
      break;
    }
    case 'sacc-name': {
      $("#console").append("<div class='cc'>Our name is Science Association of Computer College</div>");
      $("#console").append("<span class='prompt' style='-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;'>➜</span> ");
      $("#console").append("<span class='path'>" + "~" + "</span> ");
      break;
    }
    case 'sacc-install': {
      let user=prompt("请输入你的名字~");
      $('#console').append(`<div class="cc">${user}同学你好：<br>  首先祝贺你正式成为计软网安院科协的一员，从加入院科协的那一刻开始，你将经历一段从没经历和感受过的奇妙旅程。我们希望未来的一年中你能在科协这个大家庭中结交志同道合的朋友，从科协牛人中获取经验，成为技术上的大牛，或者在科协活动的举办中锻炼自己的活动组织能力。我们更希望一年后的你能像我们一样在科协为未来的学弟学妹提供技术和学习上的帮助。 愿初来南邮的你，在未来的一年中能在计软网安院科协这片沃土上，施展自己的才华，活出自己的精彩。(๑•̀ㅂ•́)و✧</div>`);
      $("#console").append("<span class='prompt' style='-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;'>➜</span> ");
      $("#console").append("<span class='path'>" + "~" + "</span> ");
      break;
    }
    case 'sacc-v': {
      $("#console").append(`<div class="cc">  这已经是SACC度过的第三十二个春夏秋冬了，我们这一路经历过暖春也经历过寒冬，还好现在你来了，希望未来的一年中你能在科协这个大家庭中结交志同道合的朋友，从科协牛人中获取经验，成为技术上的大牛，或者在科协活动的举办中锻炼自己的活动组织能力。</div>`);
      $("#console").append("<span class='prompt' style='-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;'>➜</span> ");
      $("#console").append("<span class='path'>" + "~" + "</span> ");
      break;
    }
    case 'sacc-get':{
      $("#console").append(`<a href='https://github.com/wwqin/exemption-problem-text' style="color:white">题目地址</a>\n`)
      $("#console").append('\n<h>第0题：找到所有题目</h>\n')
      $("#console").append(`<h>第3题：MergeSortGoGoGo</h>\n<h>Introduction</h><div class="cc">There are 16, 000, 000 int64 values stored in an unordered array. Please supplement the MergeSort() function defined in mergesort.go to sort this array.<br>
      
  Requirements and rating principles:<br>
  * (30%) Pass the unit test.<br>
  * (20%) Performs better than sort.Slice().<br>
  * (30%) Profile your program with pprof, analyze the performance bottleneck.<br>
  * (10%) Have a good code style.<br>
  * (10%) Document your idea and code.<br></div><h>How to use</h><div class="cc">Please supplement the MergeSort() function defined in mergesort.go to accomplish
  the home work.<br>
  **NOTE**:<br>
  1. There is a builtin unit test defined in mergesort_test.go, however, you still
     can write your own unit tests.<br>
  2. There is a builtin benchmark test defined in bench_test.go, you should run
     this benchmark to ensure that your parallel merge sort is fast enough.<br>
  
  
  How to test:<br>
  make test<br>
  
  How to benchmark:<br>
  
  make bench<br>
  </div>\n`)
      $("#console").append(`<h>第4题：Python problem</h>\n<h>Introduction</h><div class="cc">One day, when Boss Wang was socking himself in programming, he suddenly got a call from his girlfriend.
  <br>'I wanna have a python as my pet, go and buy one for me ASAP.' She said.
   <br>But Boss Wang was not willing to, so he told her,  ' Look, I have finished my extraordinary programming yesterday, I need some rest.'<br>'Really?', his girlfriend said, 'I have a software which can test whether programming will end correctly with any input or not, Hmmm, bad news, your programming didn't pass it. '<br>'No! you can never have done it. Literally, that's impossible!'<br> 'You should NEVER neglect the power of a girl，go，buy my python.'</div><h>Problem</h>\n<div class="cc">How can Boss Wang's girlfriend produce that software? Is that a easy work or not? 
   <br>Whether Boss Wang would buy a python for his girlfriend?
   <br>Is that lawful to keep a python as pet in China?</div>\n`)
      $("#console").append(`<div class="cc">第5题：通常我们看到的网页一般会有多种表现方式，比如你在电脑打开知乎可能是这个样子，在手机上打开可能又是另一个样子，所以这是怎么实现的呢。简述网页实现自适应的几种方法</div>\n\n`)
      $("#console").append(`<div class="cc">第6题：每当你在浏览器输入www.baidu.com的时候，网页就会被打开，那么，你有没有好奇过当你在浏览器输入URL的时候究竟发生了什么才能让浏览器显示出网页。简述从 URL 输入到页面展现的过程</div>\n\n`)
      $("#console").append(`<div class="cc">第7题：什么是Web Accessibility以及如果实现无障碍网页浏览（简单列举几种方法）</div>\n\n`)
      $("#console").append(`<div class="cc">第8题：尝试着部署一个本地的web服务或者应用，讲一下它的设计模式，组成结构以及消息传递方式，并且尽可能多的讲出其中的原理:）</div>\n\n`)
      $("#console").append(`<div class="cc">第9题：迎新前夕，王老板写完了迎新网页，这时，路过的产品经理小张说道：“你这个让用户等待太久了，点个注册过五六秒才有结果，不行的呀”，王老板狡辩称：“这是后端的锅”。那么，聪明的你能帮助可怜的后端小哥哥完成这个优化吗？(注：注册操作需要验证邮箱，你需要用java完成整个注册流程，只需用户名，不需要写入密码和其他信息，最后要持久化到数据库)</div>\n\n`)
      $("#console").append(`<h>第10题：蟹老板和鱼:）</h>\n<div class="cc" id="game">众所周知海洋中有很多种类的鱼，每种鱼都有自己的口味。所以蟹老板只能准备很多种的食材。可是因为种类实在太多，蟹老板实在太笨，有点记不住。他只能找来了聪明的你来回答他的问题。（蟹老板为了识别食材给了每种食材一个编号）。<br>
      已知蟹老板的操作有<br>
      （1） 询问某种食材有多少个。<br>
      （2） 增加某种食材多少个（可能原来没有这种食材）。<br>
      （3） 拿出某种食材多少个来做菜（可能是全部拿出）。<br>
      （4） 询问目前最少的食材是那一种。<br>
      （5） 把食材a和食材b归为一类（归为一类后原来和食材a一类的也和食材b一类）。<br>
      （6） 某种食材的那一大类食材有多少种食材以及食材一共有多少个。<br>
      ps : 已知海中有些种类的鱼特别多，所以有些操作可能会用很多次。<br>
      注意：<br>
1、实现方法限为C语言、伪代码、不会前两者的可以口头描述。<br>
2、因为蟹老板的客人太多，蟹老板会向你提出很多问题，所以朴素的想法无法解决它的问题。<br>
3、如果有优秀的方法，方法越多分越高，方法的时间越快，空间使用越少评分越高。<br>
4、可以不用实现所有的功能，没有标准答案。<br>
      </div>`)
      $("#console").append("<span class='prompt' style='-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;'>➜</span> ");
      $("#console").append("<span class='path'>" + "~" + "</span> ");
      break;
    }
    case 'clear':{
      $("#console").text("");
      $("#console").append("There is help.\n<h id='sacc-about'>    sacc-about          关于我们</h>\n<h id='sacc-name'>    sacc-name           我们是谁！</h>\n<h id='sacc-install'>    sacc-install        安装sacc</h>\n<h id='sacc-v'>    sacc-v              查看sacc版本</h>\n<h id='sacc-get'>    sacc-get            查看免试题题目</h>\n<h id='clear'>    clear               清屏</h>\n >:)\n");
      $("#console").append("<span class='prompt' style='-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;'>➜</span> ");
      $("#console").append("<span class='path'>" + "~" + "</span> ");
      break;
    }
  }
});
