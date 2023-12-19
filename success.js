var textGroup1 = ["text1","text2","text3","text4","text5","text6","text7","text8","text9","text10","text11","text12"];
var textGroup2 = ["text1","text2","text3","text4","text5","text6","text7","text8","text9","text10","text11","text12"];
var textGroup3 = ["text1","text2","text3","text4","text5","text6","text7","text8","text9","text10","text11","text12"];

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
      var imgUrl = folders[index] + '/img' + (number+1) + '.jpg';
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
