const React = require('react')
const Def = require('../default')


/*const React = require('react')
const Def = require('../default')

function new_form (data) {
  let message = ''                 
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            {message}                 
            ...
          </main>
        </Def>
    )
}

module.exports = new_form*/

/////reminder: You will not be able to edit. That will be further down in the rest-rant.////
function show (data) 
{
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
          <div className="row">
      <div className="col-sm-6">
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
      </div>
      <div className="col-sm-6">
      <h1>{ data.place.name }</h1>
      <h2>
          Description
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
            <h2>Rating</h2>
            {rating}
                <br />
            <h2>Description</h2>
            <p>Not Rated</p>
            <h2>Comments</h2>
            {comments}
            <h2>Got your own rant or rave?</h2>
            <p>Content</p>
            
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> Edit</a>     
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
  
</form>

<form method="POST" action={`/places/${data.place.id}/comment`}>
            <div className="form-group">
    <label htmlFor="content">content</label>
    <input className="form-control" id="content" name="content" required />
  </div>
  <div className="form-group">
    <label htmlFor="author">author</label>
    <input className="form-control" id="author" name="author" required />
  </div>
  <div className="form-group">
    <label htmlForr="stars">star rating</label>
    <input type="number" className="form-control" id="stars" min={0.5} max={5} name="stars" step={0.5} value={5} />
  </div>
  <div className="form-group">
    <label htmlFor="rant">Rant?</label>
    <input className="form-control" id="rant" name="rant" type="checkbox" value={true} />
  </div>
  <input className="btn btn-primary" type="submit" value="Add Comment"/>
  </form>
      </div>
      
</div> 
</main>
 </Def>
    )
}

module.exports = show
