var student = {
    name:'sachin',
    class:'XI',
    rollno:25
  }
  
  // To find values of each name
  console.log([student.name,student.class,student.rollno])
  
  // To find keys of object
  objKey = Object.keys(student)
  console.log(objKey)
  
  // To find length of keys
  console.log(objKey.length)
  
  // To find values of object
  objValue = Object.values(student)
  console.log(objValue)
  
  // To find length of values
  console.log(objValue.length)
  
  
  console.log(student)
  
  // To delete an property to object
  delete student.class
  console.log(student)
  
  // To add an property to object
  student.class = "XII"
  console.log(student)


  // Display rading status of books

var library = [ 
    {
        author: 'The Road Ahead',
        title: 'Bill Gates',       
        readingStatus: true
    },
    {
        author: 'Walter Isaacson',
        title: 'Steve Jobs',       
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

   console.log(library[2])

   console.log(library.length)
    
   for (var i = 0; i < library.length; i++) 
   {
    var book = library[i].title  + ' by ' + library[i].author;
     
    if (library[i].readingStatus == true) {
      console.log('You have Already read'+' ' + book);
    }
     else {
     console.log('You still need to read'+' ' + book);
    }
   }