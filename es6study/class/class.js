function User(name,age){
    this.name = name;
    this.age = age;
    }
    
    //静态方法
    User.gerClassName = function(){
    return 'User';
    };
    
    User.prototype.changeName = function(name){
    this.name = name;
    };
    
    User.prototype.changeage = function(age){
    this.age = age;
    };
    
    Object.defineProperty(User.prototype,'info',{
    get(){
        console.log(this,'--------->')
    return 'name:'+this.name + '| age:' + this.age;
    }
    });
    
    var user = new User('leo',22);
    
    console.log(user);
   
    //子类
    function Manager(name,age,password){
        console.log(this,'======>manager')
        this.a='aaaa';
    User.apply(this,[name,age]);
    this.password = password;
    }
    //继承静态方法
    Manager.__proto__ = User;    //__proto__ 实例属性
    
    //继承 prototype 方法       //prototype 构造函数的属性
    Manager.prototype = User.prototype;
    
    //添加新方法
    Manager.prototype.changePassword = function(pwd){
    this.password = password;
    };
    
    var manager = new Manager('leo',22,'123');
    
    manager.changeName('zeng jian');
    console.log(manager.info);



//     function user(){
//         //私有方法
//         function afn(){
//             console.log('afn')
//         }
//         function cfn(){

//         }
        
//     }

//     user.prototype.bfn=function(){
//         console.log('bfn')
//     }

//     function manager(){
//         //私有方法
//         function dfn(){

//         }
//     }

//     manager.prototype=user.prototype //赋值

//     manager.prototype.addUser=function(){
//         console.log('addUser')
//     }

//     Manager.__proto__ = user;   


//     var aa=new user()
//     aa.bfn()

//     var bb=new manager()
//     bb.bfn()
//     bb.addUser()
    
  

//     b.name ///1
//     a.name=2
//     b.name //2

// class a {
//     constructor(name,age){

//     }
// }

// class b extends a{
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }
// }


//call(this,1,2,3,4,5)
//apply(this,[1,2,3,4])