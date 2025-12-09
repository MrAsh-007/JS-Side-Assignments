// More Less





function moreFn(e){
    para.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nisi aspernatur recusandae, error sunt rerum dicta quisquam repellat quod repellendus perferendis dolore mollitia nesciunt minima vitae incidunt facere vel! Accusamus!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nisi aspernatur recusandae, error sunt rerum dicta quisquam repellat quod repellendus perferendis dolore mollitia nesciunt minima vitae incidunt facere vel! Accusamus!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nisi aspernatur recusandae, error sunt rerum dicta quisquam repellat quod repellendus perferendis dolore mollitia nesciunt minima vitae incidunt facere vel! Accusamus!"
    btn.innerText = "See Less"
}


function lessFn(e){
    para.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    btn.innerText = "See More"
}


function expand(){
    if(btn.innerText == "See More"){
        return moreFn(this);
    }else{
        return lessFn(this);
    }
}