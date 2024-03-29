let items = [
    {
        name: "Singapore",
        pic: "singapore",
        price: 5000,
        id: 0,
    },
    {
        name: "Taiwan",
        pic: "Taiwan",
        price: 4550,
        id: 1,
    },
    {
        name: "Maldives",
        pic: "Maldives",
        price: 6050,
        id: 2,
    },
    {
        name: "China",
        pic: "China",
        price: 3950,
        id: 3,
    }
]
let itemcart = [];
let nocart = 0;
function indexdisplay() {
    //nocart=parseInt(localStorage.getItem('nocartls'));
    //document.getElementById('cartdisplay').innerHTML=nocart;
    itemcheck = parseInt(localStorage.getItem('nocartls'));
    if (itemcheck) {
        document.getElementById('cartdisplay').innerHTML = nocart;
    }
    else {
        document.getElementById('cartdisplay').innerHTML = 0;
    }
    let productlist = document.getElementById("indexproduct");
    let htmltag = "";
    items.forEach((item, i) => {
        htmltag = "<div class='col-lg-3'> <div class='card'> <div class='card-header'> <img class='img-item' src='image/" + item.pic +
            ".jpg','.webs' alt=''> <div class='card-body'><h4 class='card-title'>Destination:" + item.name +
            "</h4> <h4 class='card-text'>Price:RM" + item.price +
            "</h4> <a href='#' class='btn btn-primary add-to-cart'>Add To Cart</a></div></div></div></div>";
        productlist.innerHTML += htmltag;
    });

    addtocartbtn = document.querySelectorAll('.add-to-cart');
    // add eventlistener to add cart button
    for (let i = 0; i < addtocartbtn.length; i++) {
        addtocartbtn[i].addEventListener('click', () => {
            additem(i);
        });
    }
}

function additem(i) {
    let itemcheck = parseInt(localStorage.getItem('nocartls'));
    let itemcart = [];

    if (itemcheck) {
        itemcart = JSON.parse(localStorage.getItem('itemcartls'));
        itemcart.push(items[i]);
    } else {
        itemcart.push(items[i]);
    }

    localStorage.setItem('itemcartls', JSON.stringify(itemcart));
    let nocart = itemcart.length;
    localStorage.setItem('nocartls', nocart);
    document.getElementById('cartdisplay').innerHTML = nocart;
}



//function for cart display
function cartpagedisplay() {
    let itemindex = parseInt(localStorage.getItem('nocartls'));
    if (itemindex) {
        nocart = itemindex; document.getElementById("cartdisplay").innerHTML = nocart;
    }
    itemcart = JSON.parse(localStorage.getItem('itemcartls'));
    productcontainer = document.getElementById("product-container")
    if (itemcart) {
        let totalprice = 0; itemcart.forEach((item, i) => {
            let htmltag = "<div class='col-3'><img class='img-cart'src='image/" + item.pic +
                ".jpg',.webs'></img></div><div class='col-3'><p>" + item.name + "</p></div><div class='col-3'>" + item.price +
                "</div><div class='col-3'><a class='btn btn-primary delbtn'>Delete</a></div><br><hr>";
            productcontainer.innerHTML += htmltag; totalprice = totalprice + item.price;
        })
        document.getElementById("totalprice").innerHTML = totalprice;
        let delbtn = document.querySelectorAll(".delbtn"); for (let i = 0; i < delbtn.length; i++) { delbtn[i].addEventListener('click', () => { removeitem(i); }); }
    }
}
function removeitem(i) {
    let itemcart = JSON.parse(localStorage.getItem('itemcartls')); itemcart.splice(i, 1);//delete array element using slice 
    for(let i=0;i<itemcart.length;i++) { 
        totalprice=totalprice+itemcart[i].price; 
    } 
    localStorage.setItem("itemcartls",JSON.stringify(itemcart)); 
    localStorage.setItem("nocartls",itemcart.length); location.reload();//reload the page //cartpagedisplay(); 
}