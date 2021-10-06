function vector(x,y)
{
  this.x=x;
  this.y=y;
    
  this.out=function()
  {
    document.write("vector(",this.x,",",this.y,")");
  }
    
  return this;
}

function add(a,b)
{
  return new vector(a.x+b.x,a.y+b.y);
}

var a=new vector(5,3);
var b=new vector(4,6);
add(a,b).out();
