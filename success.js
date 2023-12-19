var textGroup1 = ["行星:北交点","行星:南交点","行星:太阳","行星:月亮","行星:水星","行星:金星","行星:火星","行星:木星","行星:土星","行星:天王星","行星:海王星","行星:冥王星"];
var textGroup2 = ["星座:白羊座","星座:金牛座","星座:双子座","星座:巨蟹座","星座:狮子座","星座:处女座","星座:天秤座","星座:天蝎座","星座:射手座","星座:摩羯座","星座:水瓶座","星座:双鱼座"];
var textGroup3 = ["宫位:第一宫","宫位:第二宫","宫位:第三宫","宫位:第四宫","宫位:第五宫","宫位:第六宫","宫位:第七宫","宫位:第八宫","宫位:第九宫","宫位:第十宫","宫位:第十一宫","宫位:第十二宫"];

// 获取已经登录的用户名
var username = localStorage.getItem('currentUsername');
// 如果用户名存在，则在标题中显示它
if (username) {
  document.getElementById('username').textContent = username;
}

function generateRandomImageData() {
    // 首先，生成三个随机数
    var randomNumbers = Array.from({length: 3}, () => Math.floor(Math.random() * 12));
  
    // 文件夹和文字数组
    var folders = ['folder1', 'folder2', 'folder3'];
    var textGroups = [textGroup1, textGroup2, textGroup3];
  
    // 然后，根据随机数选择图片和文字
    var images = [];
    var texts = [];
    for (var index = 0; index < randomNumbers.length; index++) {
      var number = randomNumbers[index];
  
      // 生成图片URL并创建img元素
      var imgUrl = folders[index] + '/img' + (number+1) + '.png';
      var imgElement = document.createElement('img');
      imgElement.src = imgUrl;
      images.push(imgElement);
  
      // 选择对应的文字
      var text = textGroups[index][number];
      var textElement = document.createElement('p');
      textElement.textContent = text;
      texts.push(textElement);
    }
  
    // 找到用于显示图片和文字的容器
    var imageContainer = document.getElementById('image-container');
    var textContainer = document.getElementById('text-container');
  
    // 清空旧图片和文字
    imageContainer.innerHTML = '';
    textContainer.innerHTML = '';
  
    // 将新图片和文字添加到容器中
    for(var i = 0; i < images.length; i++) {
      imageContainer.appendChild(images[i]);
    }
    for(var i = 0; i < texts.length; i++) {
      textContainer.appendChild(texts[i]);
    }
  }