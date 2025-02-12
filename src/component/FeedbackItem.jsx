
const FeedbackItem = ({ user, time, message, tags, starred }) => {
    return (
        <div className="w-full p-4 shadow-md rounded-md bg-white mb-4">
            <div className="flex items-start justify-between w-full">
                <div className="flex items-start space-x-3 w-full">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                        {/* Avatar placeholder */}
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            {user.split(' ').map(n => n[0]).join('')}
                        </div>
                    </div>

                    <div className="flex-1 w-full"> 
                        <div className="flex items-center justify-between">
                            <h3 className="font-medium text-gray-900">{user}</h3>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-500">{time}</span>
                                <button className={`text-gray-400 hover:text-yellow-400 ${starred ? 'text-yellow-400' : ''}`}>
                                    ★
                                </button>
                            </div>
                        </div>

                        <p className="mt-1 text-gray-600">{message}</p>
                        <div className='flex items-center space-x-4 justify-between'>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {tags.map((tag, index) => {
                                    let tagStyle = "px-2 py-1 text-sm rounded";
                                    switch (tag.type) {
                                        case 'feature':
                                            tagStyle += " bg-blue-100 text-blue-800";
                                            break;
                                        case 'bug':
                                            tagStyle += " bg-red-100 text-red-800";
                                            break;
                                        case 'feedback':
                                            tagStyle += " bg-green-100 text-green-800";
                                            break;
                                        default:
                                            tagStyle += " bg-gray-100 text-gray-800";
                                    }
                                    switch (tag.priority) {
                                        case 'high':
                                            tagStyle += " ml-2 bg-red-100 text-red-800";
                                            break;
                                        case 'medium':
                                            tagStyle += " ml-2 bg-yellow-100 text-yellow-800";
                                            break;
                                        case 'low':
                                            tagStyle += " ml-2 bg-gray-100 text-gray-800";
                                            break;
                                    }
                                    return (
                                        <span key={index} className={tagStyle}>
                                            {tag.label}
                                        </span>
                                    );
                                })}
                            </div>

                            <div className="mt-2 flex items-center space-x-4">
                                <button className="text-gray-400 hover:text-gray-600">
                                    <span className="text-sm">💬</span>
                                </button>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <span className="text-sm">↪️</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackItem;