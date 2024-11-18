const PodcastDetail = ({ podcast }) => {
  if (!podcast) {
    return <div className="text-red-500">Podcast not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-96"
          src={podcast.videoUrl}
          title={podcast.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">{podcast.title}</h2>
        <div className="flex items-center text-gray-600 mb-4">
          <span className="mr-2">{podcast.author}</span>
          <span className="mx-1">•</span>
          <span>{new Date(podcast.date).toLocaleDateString()}</span>
        </div>
        <p className="text-gray-800 mb-4">{podcast.description}</p>
        
        <div className="mb-4">
          <span className="text-gray-600 font-semibold">Tags: </span>
          {podcast.tags.map((tag, index) => (
            <span key={index} className="text-blue-500 hover:underline mr-2">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Subscribe
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
            👍 Like
          </button>
        </div>
      </div>
    </div>
  );
};
export default PodcastDetail;