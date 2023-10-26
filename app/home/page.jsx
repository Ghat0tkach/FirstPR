



const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <div className="mx-auto  max-w-2xl px-6">
     <Header/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
        </div>
    </>
  
  );
};
