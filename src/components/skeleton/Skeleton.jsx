import React from "react";

const Skeleton = () => {
    return <div className="portfolio__loading-skeleton">
        {[1, 2, 3].map((n) => (
            <div key={n} className="skeleton-card"></div>
        ))}
    </div>
}

export default Skeleton;