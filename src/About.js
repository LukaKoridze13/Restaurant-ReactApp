import React from 'react'
import FlipCard from './FlipCard'
import 'bootstrap/dist/css/bootstrap.css'
export default function About() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-around',flexWrap:'wrap',padding: '50px 0px'}} className='row'>
      <FlipCard  title="History" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ad fuga et, totam aspernatur accusantium repellendus beatae harum illo fugiat.Exercitationem quibusdam tenetur architecto ducimus voluptatibus earum est quae!Quam, hic."/>
      <FlipCard  title="Building" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ad fuga et, totam aspernatur accusantium repellendus beatae harum illo fugiat.Exercitationem quibusdam tenetur architecto ducimus voluptatibus earum est quae!Quam, hic." />
      <FlipCard  title="Food" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ad fuga et, totam aspernatur accusantium repellendus beatae harum illo fugiat.Exercitationem quibusdam tenetur architecto ducimus voluptatibus earum est quae!Quam, hic." />
      <FlipCard  title="Owner" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ad fuga et, totam aspernatur accusantium repellendus beatae harum illo fugiat.Exercitationem quibusdam tenetur architecto ducimus voluptatibus earum est quae!Quam, hic." />
      <FlipCard  title="Product" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ad fuga et, totam aspernatur accusantium repellendus beatae harum illo fugiat.Exercitationem quibusdam tenetur architecto ducimus voluptatibus earum est quae!Quam, hic." />
      <FlipCard  title="Art" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ad fuga et, totam aspernatur accusantium repellendus beatae harum illo fugiat.Exercitationem quibusdam tenetur architecto ducimus voluptatibus earum est quae!Quam, hic." />
      <FlipCard  title="Staff" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ad fuga et, totam aspernatur accusantium repellendus beatae harum illo fugiat.Exercitationem quibusdam tenetur architecto ducimus voluptatibus earum est quae!Quam, hic." />
      <FlipCard  title="Style" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ad fuga et, totam aspernatur accusantium repellendus beatae harum illo fugiat.Exercitationem quibusdam tenetur architecto ducimus voluptatibus earum est quae!Quam, hic." />
      <FlipCard  title="Carier" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ad fuga et, totam aspernatur accusantium repellendus beatae harum illo fugiat.Exercitationem quibusdam tenetur architecto ducimus voluptatibus earum est quae!Quam, hic." />
      <FlipCard  title="Organisations" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ad fuga et, totam aspernatur accusantium repellendus beatae harum illo fugiat.Exercitationem quibusdam tenetur architecto ducimus voluptatibus earum est quae!Quam, hic." />
      <FlipCard  title="Sponsorship" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ad fuga et, totam aspernatur accusantium repellendus beatae harum illo fugiat.Exercitationem quibusdam tenetur architecto ducimus voluptatibus earum est quae!Quam, hic." />
    </div>
  )
}