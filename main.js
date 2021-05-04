names_array=["Deepthi Regoti","Sahasra Regoti","Aanandi Regoti","Regoti Family","Balaji Regoti"];
images_array=["mom clipart pic","https://cdnb.artstation.com/p/assets/images/images/004/357/479/large/yinxuan-dezarmenien-summer-yinxuan.jpg?1482894686","https://i.pinimg.com/originals/45/b6/a7/45b6a766adfe531485952efce0c5af44.jpg","https://thumbs.dreamstime.com/b/family-portrait-parents-two-daughters-cute-mother-father-full-lenght-members-standing-together-vector-illustration-146188418.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWnJJQn-tqhkjnutpWlzRv08-TXBqZoZSfyBo33RzIaQnELJcXChzuIPzfpHGYE84uOc&usqp=CAU"];
function next(){
    var i = 1;
document.getElementById("name").innerHTML = names_array[i];

document.getElementById("img1").src=images_array[i];

if(i==4){
i=-1;
};
i++;
}
