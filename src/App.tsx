import { useState } from 'react'
import {Post} from './components/Post';
import {Header} from './components/Header';
import {Sidebar} from './components/Sidebar';
import styles from './App.module.css';
import './global.css';

// author: { avatar_url: **, name: **, role: **}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/sergiosaruijr.png",
      name: "Sergio Sarui",
      role: "Web Developer",
    },
    content: [
      {type: 'paragraph', content: 'Você grita meu nome'},
      {type: 'paragraph', content: 'Clamando por compaixão'},
      {type: 'paragraph', content: 'A ti eu nego o amor'},
    ],
    publishedAt: new Date('2022-06-13 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Sarui",
      role: "Mobile Developer"
    },
    content: [
      {type: 'paragraph', content: 'Você grita meu nome'},
      {type: 'paragraph', content: 'Clamando por compaixão'},
      {type: 'paragraph', content: 'A ti eu nego o dor'},
    ],
    publishedAt: new Date('2022-06-15 17:00:00'),
  }
]



export function App() {
  return (
    <div>
      <Header/>


      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  )
}
