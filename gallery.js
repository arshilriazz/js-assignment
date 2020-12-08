let photos = document.getElementById('photos')

var myJSONString = '[{"imageURL" : "https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg","name" : "cat 1","info": "pic of a cat","date": "dec 7 2020"}]'
var data = JSON.parse(myJSONString);

display = () => {
    for (let i = 0; i < data.length * 4; i++) {
        let img = document.createElement('img')
        img.setAttribute('src', data[i % data.length].imageURL)
        photos.append(img)
    }
}

display()
