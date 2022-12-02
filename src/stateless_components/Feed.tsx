import React from "react";
import postlist from "../posts.json";
import profilePlaceholder from "../images/thispersondoesnotexist.jpeg";
import postPlaceholder from "../images/post-thumbnail-placeholder.jpg";

const PostList: React.FC = () => {
  return (
    <div className='postlist'>
      {postlist.map((post, i) => {
        return (
          <article>
            {/* className='meteredContent' */}
            {/* could use next.js for responsive images, if can be bothered learning something new */}
            {/* should use a compressed version of images for a profile icon as well, otherwise it will take forever to load on a speedtest */}
            <div className='card-header'>
              <img
                className='profile-thumbnail'
                src={profilePlaceholder}
                alt={post.author}
              />
              {/* actually the src should be more like {process.env.PUBLIC_URL + image} except you haven't set up process.env yet */}
              {/* include post.org if it's written by a person or by an org. but also tweak getposts.js to hide if one or the other doesn't exist, we don't need a billion cards with 'Unknown author in Save the Children', just say 'Save the Children' */}
              <div className='author-date-container'>
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>
            </div>
            <div className='post-summary'>
              <div className='blurb-container'>
                <h2>{post.title}</h2>
                <p className='blurb'>{post.content}</p>
                {/* figure out how to shorten post.content into max 3lines of text */}
              </div>
              <img
                className='blurb-thumbnail'
                src={postPlaceholder}
                alt={post.title}
              />
            </div>
            <div className='card-footer'>
              <div className='tag'>{post.tag}</div>
              <div>Based on your reading history/selected for you</div>
              <div>Icons for Add / Minus / Ellipsis to report</div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

const FeedNav: React.FC = () => {
  return (
    // how to programmatically show the 'selected' state ???????? use for loop to loop thru list of tabs ????

    <div id='feed-nav'>
      <a href='recommendations'>
        <div className='tab symbol'>+</div>
      </a>

      <a href='/'>
        <div className='tab selected-tab'>For you</div>
      </a>

      <a href='/?feed=following&source=home'>
        <div className='tab'>Following</div>
      </a>
    </div>
  );
};

const Feed = () => {
  return (
    <>
      <FeedNav />
      <PostList />
    </>
  );
};

export default Feed;
