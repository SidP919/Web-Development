const mongoose = require('mongoose');

//Defining the MongoDB Schema for bloggingWebApp:
const blogSchema = new mongoose.Schema({
    blogTitle:{
        type:String,
        required: true,
        maxlength: 100
    },
    blogAuthor:{
        type:String,
        required:true,
        maxlength: 30
    },
    blogPublishDate:{
        type: Date, 
        default: Date.now
    },
    blogImage:{
        type:String,
        default: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    blogContent:{
        type:String,
        required:true
    }
});

// Model for our BlogSchema
const Blog = mongoose.model('Blogs', blogSchema);

//seed data
const blogsArr = [
    {
        blogTitle:"Blog Title 01",
        blogAuthor:"Blog Author 01",
        blogImage:"https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        blogContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui facilisis, efficitur lorem vel, malesuada odio. Sed mattis suscipit ligula, sed hendrerit sapien. Pellentesque gravida libero et enim porttitor imperdiet. Aenean pulvinar urna ac rutrum mattis. Vivamus dignissim placerat tellus eget posuere. Praesent ultrices diam eget quam porttitor, non placerat felis euismod. Fusce accumsan, nulla eu commodo convallis, turpis libero tempor erat, in tincidunt odio orci sed dui. Proin ullamcorper ipsum id libero vestibulum, in lobortis mauris tincidunt. Nam et sem auctor, volutpat neque at, pretium dui.\n"+
        "\nNullam ac rutrum lorem, id egestas lacus. Duis laoreet, urna vel vehicula dictum, odio eros pellentesque nisl, ut congue metus nisl vitae urna. Duis convallis, ligula quis efficitur accumsan, ipsum velit sagittis neque, at congue nunc dolor sed risus. Vivamus feugiat neque vitae tempus blandit. Praesent ornare odio a erat blandit, id congue tellus suscipit. Phasellus id facilisis ligula. Sed lobortis libero ut augue egestas scelerisque. Proin mollis volutpat mauris ut hendrerit. Nulla maximus nisl eget rutrum pellentesque. Vivamus ante felis, sodales vel diam vitae, lacinia pharetra nunc. Cras vestibulum ullamcorper ante, ac molestie est dapibus ut. Mauris a velit ac turpis sollicitudin ullamcorper. Nunc non neque dolor. Suspendisse non fringilla massa, id cursus arcu. Proin quis turpis viverra, facilisis diam vitae, varius dui. Duis condimentum, mauris in pretium fermentum, tortor quam venenatis ipsum, vel feugiat sapien tellus non libero.\n"+
        "\nUt fringilla nulla a dui sollicitudin dapibus. Proin sit amet commodo ligula. Donec id justo pharetra, vulputate metus in, dignissim tellus. Integer in sagittis velit, a rutrum lectus. Cras imperdiet eu mi eu iaculis. Sed dictum ullamcorper turpis. Cras tempus ornare tristique. Etiam faucibus diam id suscipit rutrum. Phasellus semper, purus vel pellentesque dapibus, ante nulla sodales erat, placerat commodo enim erat nec nisl. Suspendisse ac suscipit ex. Quisque luctus odio in metus tincidunt, ut vestibulum neque feugiat. Praesent eleifend ornare sapien quis ornare. Vivamus congue efficitur faucibus.\n"
    },
    {
        blogTitle:"Blog Title 02",
        blogAuthor:"Blog Author 02",
        blogImage:"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        blogContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui facilisis, efficitur lorem vel, malesuada odio. Sed mattis suscipit ligula, sed hendrerit sapien. Pellentesque gravida libero et enim porttitor imperdiet. Aenean pulvinar urna ac rutrum mattis. Vivamus dignissim placerat tellus eget posuere. Praesent ultrices diam eget quam porttitor, non placerat felis euismod. Fusce accumsan, nulla eu commodo convallis, turpis libero tempor erat, in tincidunt odio orci sed dui. Proin ullamcorper ipsum id libero vestibulum, in lobortis mauris tincidunt. Nam et sem auctor, volutpat neque at, pretium dui.\n"+
        "\nNullam ac rutrum lorem, id egestas lacus. Duis laoreet, urna vel vehicula dictum, odio eros pellentesque nisl, ut congue metus nisl vitae urna. Duis convallis, ligula quis efficitur accumsan, ipsum velit sagittis neque, at congue nunc dolor sed risus. Vivamus feugiat neque vitae tempus blandit. Praesent ornare odio a erat blandit, id congue tellus suscipit. Phasellus id facilisis ligula. Sed lobortis libero ut augue egestas scelerisque. Proin mollis volutpat mauris ut hendrerit. Nulla maximus nisl eget rutrum pellentesque. Vivamus ante felis, sodales vel diam vitae, lacinia pharetra nunc. Cras vestibulum ullamcorper ante, ac molestie est dapibus ut. Mauris a velit ac turpis sollicitudin ullamcorper. Nunc non neque dolor. Suspendisse non fringilla massa, id cursus arcu. Proin quis turpis viverra, facilisis diam vitae, varius dui. Duis condimentum, mauris in pretium fermentum, tortor quam venenatis ipsum, vel feugiat sapien tellus non libero.\n"+
        "\nUt fringilla nulla a dui sollicitudin dapibus. Proin sit amet commodo ligula. Donec id justo pharetra, vulputate metus in, dignissim tellus. Integer in sagittis velit, a rutrum lectus. Cras imperdiet eu mi eu iaculis. Sed dictum ullamcorper turpis. Cras tempus ornare tristique. Etiam faucibus diam id suscipit rutrum. Phasellus semper, purus vel pellentesque dapibus, ante nulla sodales erat, placerat commodo enim erat nec nisl. Suspendisse ac suscipit ex. Quisque luctus odio in metus tincidunt, ut vestibulum neque feugiat. Praesent eleifend ornare sapien quis ornare. Vivamus congue efficitur faucibus.\n"
    },
    {
        blogTitle:"Blog Title 03",
        blogAuthor:"Blog Author 03",
        blogImage:"https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        blogContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui facilisis, efficitur lorem vel, malesuada odio. Sed mattis suscipit ligula, sed hendrerit sapien. Pellentesque gravida libero et enim porttitor imperdiet. Aenean pulvinar urna ac rutrum mattis. Vivamus dignissim placerat tellus eget posuere. Praesent ultrices diam eget quam porttitor, non placerat felis euismod. Fusce accumsan, nulla eu commodo convallis, turpis libero tempor erat, in tincidunt odio orci sed dui. Proin ullamcorper ipsum id libero vestibulum, in lobortis mauris tincidunt. Nam et sem auctor, volutpat neque at, pretium dui.\n"+
        "\nNullam ac rutrum lorem, id egestas lacus. Duis laoreet, urna vel vehicula dictum, odio eros pellentesque nisl, ut congue metus nisl vitae urna. Duis convallis, ligula quis efficitur accumsan, ipsum velit sagittis neque, at congue nunc dolor sed risus. Vivamus feugiat neque vitae tempus blandit. Praesent ornare odio a erat blandit, id congue tellus suscipit. Phasellus id facilisis ligula. Sed lobortis libero ut augue egestas scelerisque. Proin mollis volutpat mauris ut hendrerit. Nulla maximus nisl eget rutrum pellentesque. Vivamus ante felis, sodales vel diam vitae, lacinia pharetra nunc. Cras vestibulum ullamcorper ante, ac molestie est dapibus ut. Mauris a velit ac turpis sollicitudin ullamcorper. Nunc non neque dolor. Suspendisse non fringilla massa, id cursus arcu. Proin quis turpis viverra, facilisis diam vitae, varius dui. Duis condimentum, mauris in pretium fermentum, tortor quam venenatis ipsum, vel feugiat sapien tellus non libero.\n"+
        "\nUt fringilla nulla a dui sollicitudin dapibus. Proin sit amet commodo ligula. Donec id justo pharetra, vulputate metus in, dignissim tellus. Integer in sagittis velit, a rutrum lectus. Cras imperdiet eu mi eu iaculis. Sed dictum ullamcorper turpis. Cras tempus ornare tristique. Etiam faucibus diam id suscipit rutrum. Phasellus semper, purus vel pellentesque dapibus, ante nulla sodales erat, placerat commodo enim erat nec nisl. Suspendisse ac suscipit ex. Quisque luctus odio in metus tincidunt, ut vestibulum neque feugiat. Praesent eleifend ornare sapien quis ornare. Vivamus congue efficitur faucibus.\n"
    },
    {
        blogTitle:"Blog Title 04",
        blogAuthor:"Blog Author 04",
        blogImage:"https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        blogContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui facilisis, efficitur lorem vel, malesuada odio. Sed mattis suscipit ligula, sed hendrerit sapien. Pellentesque gravida libero et enim porttitor imperdiet. Aenean pulvinar urna ac rutrum mattis. Vivamus dignissim placerat tellus eget posuere. Praesent ultrices diam eget quam porttitor, non placerat felis euismod. Fusce accumsan, nulla eu commodo convallis, turpis libero tempor erat, in tincidunt odio orci sed dui. Proin ullamcorper ipsum id libero vestibulum, in lobortis mauris tincidunt. Nam et sem auctor, volutpat neque at, pretium dui.\n"+
        "\nNullam ac rutrum lorem, id egestas lacus. Duis laoreet, urna vel vehicula dictum, odio eros pellentesque nisl, ut congue metus nisl vitae urna. Duis convallis, ligula quis efficitur accumsan, ipsum velit sagittis neque, at congue nunc dolor sed risus. Vivamus feugiat neque vitae tempus blandit. Praesent ornare odio a erat blandit, id congue tellus suscipit. Phasellus id facilisis ligula. Sed lobortis libero ut augue egestas scelerisque. Proin mollis volutpat mauris ut hendrerit. Nulla maximus nisl eget rutrum pellentesque. Vivamus ante felis, sodales vel diam vitae, lacinia pharetra nunc. Cras vestibulum ullamcorper ante, ac molestie est dapibus ut. Mauris a velit ac turpis sollicitudin ullamcorper. Nunc non neque dolor. Suspendisse non fringilla massa, id cursus arcu. Proin quis turpis viverra, facilisis diam vitae, varius dui. Duis condimentum, mauris in pretium fermentum, tortor quam venenatis ipsum, vel feugiat sapien tellus non libero.\n"+
        "\nUt fringilla nulla a dui sollicitudin dapibus. Proin sit amet commodo ligula. Donec id justo pharetra, vulputate metus in, dignissim tellus. Integer in sagittis velit, a rutrum lectus. Cras imperdiet eu mi eu iaculis. Sed dictum ullamcorper turpis. Cras tempus ornare tristique. Etiam faucibus diam id suscipit rutrum. Phasellus semper, purus vel pellentesque dapibus, ante nulla sodales erat, placerat commodo enim erat nec nisl. Suspendisse ac suscipit ex. Quisque luctus odio in metus tincidunt, ut vestibulum neque feugiat. Praesent eleifend ornare sapien quis ornare. Vivamus congue efficitur faucibus.\n"
    },
    {
        blogTitle:"Blog Title 05",
        blogAuthor:"Blog Author 05",
        blogImage:"https://images.unsplash.com/photo-1542435503-956c469947f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        blogContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui facilisis, efficitur lorem vel, malesuada odio. Sed mattis suscipit ligula, sed hendrerit sapien. Pellentesque gravida libero et enim porttitor imperdiet. Aenean pulvinar urna ac rutrum mattis. Vivamus dignissim placerat tellus eget posuere. Praesent ultrices diam eget quam porttitor, non placerat felis euismod. Fusce accumsan, nulla eu commodo convallis, turpis libero tempor erat, in tincidunt odio orci sed dui. Proin ullamcorper ipsum id libero vestibulum, in lobortis mauris tincidunt. Nam et sem auctor, volutpat neque at, pretium dui.\n"+
        "\nNullam ac rutrum lorem, id egestas lacus. Duis laoreet, urna vel vehicula dictum, odio eros pellentesque nisl, ut congue metus nisl vitae urna. Duis convallis, ligula quis efficitur accumsan, ipsum velit sagittis neque, at congue nunc dolor sed risus. Vivamus feugiat neque vitae tempus blandit. Praesent ornare odio a erat blandit, id congue tellus suscipit. Phasellus id facilisis ligula. Sed lobortis libero ut augue egestas scelerisque. Proin mollis volutpat mauris ut hendrerit. Nulla maximus nisl eget rutrum pellentesque. Vivamus ante felis, sodales vel diam vitae, lacinia pharetra nunc. Cras vestibulum ullamcorper ante, ac molestie est dapibus ut. Mauris a velit ac turpis sollicitudin ullamcorper. Nunc non neque dolor. Suspendisse non fringilla massa, id cursus arcu. Proin quis turpis viverra, facilisis diam vitae, varius dui. Duis condimentum, mauris in pretium fermentum, tortor quam venenatis ipsum, vel feugiat sapien tellus non libero.\n"+
        "\nUt fringilla nulla a dui sollicitudin dapibus. Proin sit amet commodo ligula. Donec id justo pharetra, vulputate metus in, dignissim tellus. Integer in sagittis velit, a rutrum lectus. Cras imperdiet eu mi eu iaculis. Sed dictum ullamcorper turpis. Cras tempus ornare tristique. Etiam faucibus diam id suscipit rutrum. Phasellus semper, purus vel pellentesque dapibus, ante nulla sodales erat, placerat commodo enim erat nec nisl. Suspendisse ac suscipit ex. Quisque luctus odio in metus tincidunt, ut vestibulum neque feugiat. Praesent eleifend ornare sapien quis ornare. Vivamus congue efficitur faucibus.\n"
    },
    {
        blogTitle:"Blog Title 06",
        blogAuthor:"Blog Author 06",
        blogImage:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        blogContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui facilisis, efficitur lorem vel, malesuada odio. Sed mattis suscipit ligula, sed hendrerit sapien. Pellentesque gravida libero et enim porttitor imperdiet. Aenean pulvinar urna ac rutrum mattis. Vivamus dignissim placerat tellus eget posuere. Praesent ultrices diam eget quam porttitor, non placerat felis euismod. Fusce accumsan, nulla eu commodo convallis, turpis libero tempor erat, in tincidunt odio orci sed dui. Proin ullamcorper ipsum id libero vestibulum, in lobortis mauris tincidunt. Nam et sem auctor, volutpat neque at, pretium dui.\n"+
        "\nNullam ac rutrum lorem, id egestas lacus. Duis laoreet, urna vel vehicula dictum, odio eros pellentesque nisl, ut congue metus nisl vitae urna. Duis convallis, ligula quis efficitur accumsan, ipsum velit sagittis neque, at congue nunc dolor sed risus. Vivamus feugiat neque vitae tempus blandit. Praesent ornare odio a erat blandit, id congue tellus suscipit. Phasellus id facilisis ligula. Sed lobortis libero ut augue egestas scelerisque. Proin mollis volutpat mauris ut hendrerit. Nulla maximus nisl eget rutrum pellentesque. Vivamus ante felis, sodales vel diam vitae, lacinia pharetra nunc. Cras vestibulum ullamcorper ante, ac molestie est dapibus ut. Mauris a velit ac turpis sollicitudin ullamcorper. Nunc non neque dolor. Suspendisse non fringilla massa, id cursus arcu. Proin quis turpis viverra, facilisis diam vitae, varius dui. Duis condimentum, mauris in pretium fermentum, tortor quam venenatis ipsum, vel feugiat sapien tellus non libero.\n"+
        "\nUt fringilla nulla a dui sollicitudin dapibus. Proin sit amet commodo ligula. Donec id justo pharetra, vulputate metus in, dignissim tellus. Integer in sagittis velit, a rutrum lectus. Cras imperdiet eu mi eu iaculis. Sed dictum ullamcorper turpis. Cras tempus ornare tristique. Etiam faucibus diam id suscipit rutrum. Phasellus semper, purus vel pellentesque dapibus, ante nulla sodales erat, placerat commodo enim erat nec nisl. Suspendisse ac suscipit ex. Quisque luctus odio in metus tincidunt, ut vestibulum neque feugiat. Praesent eleifend ornare sapien quis ornare. Vivamus congue efficitur faucibus.\n"
    },
    {
        blogTitle:"Blog Title 07",
        blogAuthor:"Blog Author 07",
        blogImage:"https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        blogContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui facilisis, efficitur lorem vel, malesuada odio. Sed mattis suscipit ligula, sed hendrerit sapien. Pellentesque gravida libero et enim porttitor imperdiet. Aenean pulvinar urna ac rutrum mattis. Vivamus dignissim placerat tellus eget posuere. Praesent ultrices diam eget quam porttitor, non placerat felis euismod. Fusce accumsan, nulla eu commodo convallis, turpis libero tempor erat, in tincidunt odio orci sed dui. Proin ullamcorper ipsum id libero vestibulum, in lobortis mauris tincidunt. Nam et sem auctor, volutpat neque at, pretium dui.\n"+
        "\nNullam ac rutrum lorem, id egestas lacus. Duis laoreet, urna vel vehicula dictum, odio eros pellentesque nisl, ut congue metus nisl vitae urna. Duis convallis, ligula quis efficitur accumsan, ipsum velit sagittis neque, at congue nunc dolor sed risus. Vivamus feugiat neque vitae tempus blandit. Praesent ornare odio a erat blandit, id congue tellus suscipit. Phasellus id facilisis ligula. Sed lobortis libero ut augue egestas scelerisque. Proin mollis volutpat mauris ut hendrerit. Nulla maximus nisl eget rutrum pellentesque. Vivamus ante felis, sodales vel diam vitae, lacinia pharetra nunc. Cras vestibulum ullamcorper ante, ac molestie est dapibus ut. Mauris a velit ac turpis sollicitudin ullamcorper. Nunc non neque dolor. Suspendisse non fringilla massa, id cursus arcu. Proin quis turpis viverra, facilisis diam vitae, varius dui. Duis condimentum, mauris in pretium fermentum, tortor quam venenatis ipsum, vel feugiat sapien tellus non libero.\n"+
        "\nUt fringilla nulla a dui sollicitudin dapibus. Proin sit amet commodo ligula. Donec id justo pharetra, vulputate metus in, dignissim tellus. Integer in sagittis velit, a rutrum lectus. Cras imperdiet eu mi eu iaculis. Sed dictum ullamcorper turpis. Cras tempus ornare tristique. Etiam faucibus diam id suscipit rutrum. Phasellus semper, purus vel pellentesque dapibus, ante nulla sodales erat, placerat commodo enim erat nec nisl. Suspendisse ac suscipit ex. Quisque luctus odio in metus tincidunt, ut vestibulum neque feugiat. Praesent eleifend ornare sapien quis ornare. Vivamus congue efficitur faucibus.\n"
    },
    {
        blogTitle:"Blog Title 08",
        blogAuthor:"Blog Author 08",
        blogImage:"https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        blogContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui facilisis, efficitur lorem vel, malesuada odio. Sed mattis suscipit ligula, sed hendrerit sapien. Pellentesque gravida libero et enim porttitor imperdiet. Aenean pulvinar urna ac rutrum mattis. Vivamus dignissim placerat tellus eget posuere. Praesent ultrices diam eget quam porttitor, non placerat felis euismod. Fusce accumsan, nulla eu commodo convallis, turpis libero tempor erat, in tincidunt odio orci sed dui. Proin ullamcorper ipsum id libero vestibulum, in lobortis mauris tincidunt. Nam et sem auctor, volutpat neque at, pretium dui.\n"+
        "\nNullam ac rutrum lorem, id egestas lacus. Duis laoreet, urna vel vehicula dictum, odio eros pellentesque nisl, ut congue metus nisl vitae urna. Duis convallis, ligula quis efficitur accumsan, ipsum velit sagittis neque, at congue nunc dolor sed risus. Vivamus feugiat neque vitae tempus blandit. Praesent ornare odio a erat blandit, id congue tellus suscipit. Phasellus id facilisis ligula. Sed lobortis libero ut augue egestas scelerisque. Proin mollis volutpat mauris ut hendrerit. Nulla maximus nisl eget rutrum pellentesque. Vivamus ante felis, sodales vel diam vitae, lacinia pharetra nunc. Cras vestibulum ullamcorper ante, ac molestie est dapibus ut. Mauris a velit ac turpis sollicitudin ullamcorper. Nunc non neque dolor. Suspendisse non fringilla massa, id cursus arcu. Proin quis turpis viverra, facilisis diam vitae, varius dui. Duis condimentum, mauris in pretium fermentum, tortor quam venenatis ipsum, vel feugiat sapien tellus non libero.\n"+
        "\nUt fringilla nulla a dui sollicitudin dapibus. Proin sit amet commodo ligula. Donec id justo pharetra, vulputate metus in, dignissim tellus. Integer in sagittis velit, a rutrum lectus. Cras imperdiet eu mi eu iaculis. Sed dictum ullamcorper turpis. Cras tempus ornare tristique. Etiam faucibus diam id suscipit rutrum. Phasellus semper, purus vel pellentesque dapibus, ante nulla sodales erat, placerat commodo enim erat nec nisl. Suspendisse ac suscipit ex. Quisque luctus odio in metus tincidunt, ut vestibulum neque feugiat. Praesent eleifend ornare sapien quis ornare. Vivamus congue efficitur faucibus.\n"
    }
];

// insert seed data in Blog model:
function seed(){
    Blog.insertMany(blogsArr)
    .then(()=>{
        console.log('DB Seeded');
    })
    .catch(err=>console.log(err));
}

module.exports = seed;