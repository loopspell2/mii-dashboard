import React from 'react';
import FeedbackItem from './FeedbackItem';


const FeedbackList = () => {
    const feedbackData = [
        {
            user: "Sarah Johnson",
            time: "2 hours ago",
            message: "The new inventory management module is great, but it would be helpful to have bulk editing capabilities for product details.",
            tags: [
                { type: 'feature', label: 'Feature Request' },
                { priority: 'medium', label: 'Medium Priority' }
            ],
            starred: false
        },
        {
            user: "Michael Chen",
            time: "1 day ago",
            message: "Found a bug in the reporting module. When generating monthly sales reports, the totals don't match with the individual entries.",
            tags: [
                { type: 'bug', label: 'Bug Report' },
                { priority: 'high', label: 'High Priority' }
            ],
            starred: true
        },
        {
            user: "Emily Rodriguez",
            time: "3 days ago",
            message: "The UI is much cleaner now after the update. Really loving the new dashboard layout and the quick access toolbar.",
            tags: [
                { type: 'feedback', label: 'Feedback' },
                { priority: 'low', label: 'Low Priority' }
            ],
            starred: false
        },
        {
            user: "Emily Rodriguez",
            time: "3 days ago",
            message: "The UI is much cleaner now after the update. Really loving the new dashboard layout and the quick access toolbar.",
            tags: [
                { type: 'feedback', label: 'Feedback' },
                { priority: 'low', label: 'Low Priority' }
            ],
            starred: false
        }
    ];

    return (
        <div className=" mx-[18%] bg-white rounded-lg shadow">

            <div className="shadow-md rounded-md mb-4 p-4">
                <div className="flex items-center justify-between space-x-4">
                    <div className='flex items-center space-x-4'>
                        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">
                            All Feedback
                        </button>
                        <button className="text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">
                            Starred
                        </button>
                        <button className="text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">
                            Recent
                        </button>
                    </div>
                    <div className="ml-auto">
                        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                            <option>Sort by: Latest</option>
                            <option>Sort by: Oldest</option>
                            <option>Sort by: Priority</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="">
                {feedbackData.map((feedback, index) => (
                    <FeedbackItem key={index} {...feedback} />
                ))}
            </div>

            <div className="p-4 text-center">
                <button className="bg-gray-900 hover:bg-gray-800 text-gray-50 py-2 px-4 rounded-md hover:text-gray-100 text-sm font-medium">
                    Load More Feedback
                </button>
            </div>
        </div>
    );
};

export default FeedbackList;