class CreateNode{
    constructor(node){
        this.leftchild = node ? node.leftchild : null;
        this.rightchild =node ? node.rightchild : null;
        this.data =node ? node.data : null;
     }
}
 
class BinaryTree {
    constructor(){
        this.root = new CreateNode();
    }

    build(...nodes){
        nodes.unshift(null);
        let head = this.root;
        let res = [], i = 1, len = nodes.length, data,v;
        res.push(head);
        head.data = nodes[i];
        while(res.length != 0){
            v = res[0];
            if(i*2 > len) break;
            if(i*2 <= len){
                data = nodes[i*2]
                v.leftchild =  data ? this.createNode({data}): null
                v.leftchild && res.push(v.leftchild)
            }
            if(i*2+1 <= len){
                data = nodes[i*2+1]
                v.rightchild =  data ? this.createNode({data}): null
                v.rightchild && res.push(v.rightchild)
            }
            res.shift()
            i++
        }
        console.log(head)
        return head;
    }

    createNode(v){
        let newNode = new CreateNode({data: v.data});
        return newNode;
    }
    
    tarverse(node){
        if(!node) return;

        console.log(node.data)
        this.tarverse(node.leftchild)
        this.tarverse(node.rightchild)
    }
}