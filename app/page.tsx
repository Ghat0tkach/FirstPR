import getPostMetadata from "../components/utils/getPostMetadata";
import PostPreview from "../components/utils/PostPreview";
import Header from "../components/header/header"
const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
     <Header/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
    </>
  
  );
};

export default HomePage;
