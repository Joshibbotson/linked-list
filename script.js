class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    
    
    prepend = value => {
      let previousHead = this.head
      this.head = new Node(value)
      this.head.nextNode = previousHead
      this.size++
    }
    
      append = (value) => {
      let node = new Node(value)
      let current;  
      
      if(!this.head){
        this.head = node;
        this.size++
      }
      else {
        current = this.head
        while(current.nextNode){
          current = current.nextNode
        }
        current.nextNode = node
        this.size++ 
      }
    }
    
    printAll = () => {
      let current = this.head
      while(current){
        console.log(current.value)
        current = current.nextNode
      }
    }
    
    size = () => {
      console.log(this.size)
    }
    
    returnHead = () => {
      if (!this.head){
        console.log("No head defined")
      }
      else {
        return this.head
      }
    }
    
    tail = () => {
      if(this.size === 0){
        console.log("size is 0")
      }
      else {
        let current = this.head;
        for (let i = 0; i <= this.size-2; i++){
          current = current.nextNode
          if (i === this.size-2){
            return current
              }
          }
        }
    }
    index = (index) => {
      if(this.size === 0){
        console.log("size is 0")
      } else {
        let current = this.head
        let size = this.size
        size = 1;
        while(size !== index){
          current = current.nextNode
          size ++
        }
        return current
      }
    }
    
      pop = () => {
      if(this.size === 0){
        console.log("size is 0")
      } else {
        let current = this.head
        for (let i = 0; i < this.size-2; i++){
          current = current.nextNode
        }
              current.nextNode = null;
        console.log(current)
      }
    }
    
    contains = (index) =>{
      if (index === null){
        return true
      }
      
      let current = this.head
      while(current){
        current = current.nextNode
        if (current === null){
          return false
        }
              if (current.value === index){
          return true
        }
      }
          return false
    }
    
    find = (index) => {
      if (this.size === 0 && index === 0){
        return 0
      }
      else {
          let current = this.head
          let position = 1
          if (current.value === index){
            return position
          }
          while(current){
            current = current.nextNode
            position++
            if (current.value === index){
              return position
            }
            if (index > this.size){
                    throw Error('index is larger than size')}
              }
            return false
        }
    }
    
    toString = () => {
      let current = this.head
      let arr = []
      while(current){
        arr.push(current.value)
        current = current.nextNode
      }
      arr.push(current)
      let newArr = arr.map(x => `( ${x} )`)
      return newArr.toString().replaceAll(',', ' -> ')
    }
    
    insertAt =	(value, index) => {
      if (index > this.size){
        throw Error("index is larger than size")
      }
      if (index === 0 && this.size === 0){
        this.head = new Node(value)
        this.size++
      }
      if (index === 0 && this.size > 0){
      throw Error("not a valid index")
      }
      if (index === 1){
        let previousHead = this.head
        this.prepend(value)
              this.head.nextNode = previousHead
              
      }
      else {
        let node = new Node(value)
        let postIndex = this.index(index)
        let preIndex =this.head
        let cutoff = this.head
        for (let i = 0; i < index-2; i++){
          cutoff = cutoff.nextNode
         }
        
        cutoff.nextNode = null
        cutoff.nextNode = node
        
        let appendTo = cutoff.nextNode
        let insertedNode = cutoff
        
              this.head = preIndex
              appendTo.nextNode = postIndex
        this.size++
      }
    }
    
    removeAt = (index) => {
      if (index > this.size){
        throw Error("index is larger than size")
      }
      if (index === 0 && this.size === 0){
        this.head = new Node(null)
        this.size++
      }
      if (index === 0 && this.size > 0){
      throw Error("not a valid index")
      }
      if (index === 1){
        let previousHead = this.head
        this.head = this.index(2)
        this.size--
      }
        let postIndex = this.index(index+1)
        let preIndex =this.head
        let cutoff = this.head
        for (let i = 0; i < index-2; i++){
        cutoff = cutoff.nextNode
        }      
      cutoff.nextNode = postIndex
      this.size--
  }
  }
  
  // Node class//
  class Node {
      constructor(value) {
        this.value = value
        this.nextNode = null
      }
  }
  
  
  
 
