import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
import {Avatar} from './Avatar';
import {useState} from 'react';
import styles from './Comment.module.css';


export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    console.log('deletar')

    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  return (
    <div className= {styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/sergiosaruijr.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}> 
              <strong>Sergio Sarui</strong>
              <time title='29 de dezembro às 11:30' dateTime='2022-12-29 11:33:30'> Cerca de uma 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}