var a=function(a,b,c){
    var a=a
    function a(){} //私有
    function b(){
        console.log(a)
    }
    return{
        
        b:b
    }
}

function a(a,b,c,fn){
    var d=a+b+c
    fn(d)
}


var b=new a(1,2,3,function(d){
    console.log(d)
})



var b=new a()
b.b()

class a{
    constructor(a,b,c){
        super()
        this.name
        this._dd='abc'
    }
    get dd(){
       return this._dd
    }
    set dd(val){
        this._dd=val
    }
}

var c=new a()
c.dd