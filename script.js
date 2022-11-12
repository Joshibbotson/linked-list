class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    
    
    prepend = value => {
      this.head = new Node(value, this.head)
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
      if (this.size === 0){
        return 0
      }	else {
          let current = this.head
          let position = 1
          while(current){
            current = current.nextNode
            position++
            if (current === null){
              return position
            }
            if (current.value === index){
              return position
            }
          }
            return false
        }
    }
    
      toString = () => {
      
    }
  }
  
  
  
  
  // Node class//
  class Node {
      constructor(value) {
          this.value = value
          this.nextNode = null
      }
  }