import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Projects() {
  return (
    <div className='margin-item'>
    <div className='title'>PROJECT</div><hr/>
    <div id='flexx'>
    <div>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="350"
        image= 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg'
        alt="bahubali"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Basic CRUD Operation
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Simple create read update and delete operation were carried out using mockapi.
        </Typography>
        <a href='https://fascinating-cendol-e1a5d8.netlify.app/' className='project-link'>Link</a>
      </CardContent>
    </Card>
    </div>

    <div>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="350"
        image= 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg'
        alt="bahubali"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Student Teacher Portal
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Simple create read update and delete operation were carried out using useContext on student and teacher list
        </Typography>
        <a href='https://jade-pegasus-c8be4a.netlify.app' className='project-link'>Link</a>
      </CardContent>
    </Card>
    </div>

    <div>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="350"
        image= 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg'
        alt="bahubali"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Shopping website
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Practice of event like onclick, after clicking on add to card shopping count is incresed as well as button name is changed to remove from cart.
        </Typography>
        <a href='https://glittery-moonbeam-950ac6.netlify.app' className='project-link'>Link</a>
      </CardContent>
    </Card>
    </div>

    <div>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="350"
        image= 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg'
        alt="bahubali"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Nationality
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Practice of fetching data from a API to check the nationality of any name.
        </Typography>
        <a href='https://silver-mousse-9b6578.netlify.app/' className='project-link'>Link</a>
      </CardContent>
    </Card>
    </div>

    <div>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="350"
        image= 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg'
        alt="bahubali"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Book my show
        </Typography>
        <Typography variant="body2" color="text.secondary">
        booking app for movie ticket.
        </Typography>
        <a href='https://heroic-torrone-8e28aa.netlify.app/' className='project-link'>Link</a>
      </CardContent>
    </Card>
    </div>

    <div>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="350"
        image= 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg'
        alt="bahubali"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Calculator
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A simple calculator to perform addition, substraction, division, multiplication.
        </Typography>
        <a href='https://famous-sunburst-2aa517.netlify.app' className='project-link'>Link</a>
      </CardContent>
    </Card>
    </div>

    <div>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="350"
        image= 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/06/chris-ried-512801-unsplash.jpg'
        alt="bahubali"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Weather
        </Typography>
        <Typography variant="body2" color="text.secondary">
        weather app where we get all climate condition of given country or state.
        </Typography>
        <a href='https://vermillion-tanuki-c20a62.netlify.app/' className='project-link'>Link</a>
      </CardContent>
    </Card>
    </div>



    </div>
      </div>
  )
}

export default Projects