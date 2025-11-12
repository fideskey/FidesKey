import React from 'react';

const Shimmer = () => (
    React.createElement('div', { className: "absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" })
);

const SkeletonBox = ({ className }) => (
    React.createElement('div', { className: `relative overflow-hidden bg-gray-800 rounded-lg ${className}` },
        React.createElement(Shimmer, null)
    )
);

const SkeletonLoader = () => {
    return (
        React.createElement('div', { className: "space-y-12" },
            // Featured Story Skeleton
            React.createElement('div', { className: "w-full" },
                React.createElement(SkeletonBox, { className: "h-[450px] mb-4" }),
                React.createElement(SkeletonBox, { className: "h-4 w-1/4 mb-2" }),
                React.createElement(SkeletonBox, { className: "h-8 w-3/4" })
            ),
            // Timeline Lane Skeleton
            React.createElement('div', { className: "space-y-8" },
                [...Array(3)].map((_, i) => (
                    React.createElement('div', { key: i },
                        React.createElement(SkeletonBox, { className: "h-8 w-1/3 mb-4" }),
                        React.createElement('div', { className: "flex space-x-4" },
                            [...Array(4)].map((_, j) => (
                                React.createElement('div', { key: j, className: "flex-shrink-0 w-64" },
                                    React.createElement(SkeletonBox, { className: "h-36 mb-2" }),
                                    React.createElement(SkeletonBox, { className: "h-4 w-full" }),
                                    React.createElement(SkeletonBox, { className: "h-4 w-2/3 mt-1" })
                                )
                            ))
                        )
                    )
                ))
            )
        )
    );
};

export default SkeletonLoader;
