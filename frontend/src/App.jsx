import { useVotes } from './hooks/useVotes';
import VoteButton from './components/VoteButton';
import Results from './components/Results';
import './App.css';

function App() {
  // Use our custom hook for all vote data and logic
  const { likeCount, loveCount, loading, message, submitVote } = useVotes();

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Do you like this?</h1>
          <p>Click a button to vote!</p>
        </div>

        <div className="vote-buttons">
          <VoteButton 
            voteType="like" 
            onClick={submitVote}
            count={likeCount}
            disabled={loading}
          />
          <VoteButton 
            voteType="love" 
            onClick={submitVote}
            count={loveCount}
            disabled={loading}
          />
        </div>

        {message && <p className="message">{message}</p>}

        <Results likeCount={likeCount} loveCount={loveCount} />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;