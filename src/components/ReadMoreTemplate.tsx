import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ReadMoreTemplateProps {
  title: string;
  shortContent: string;
  fullContent: string;
  maxLength?: number;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
}

const ReadMoreTemplate: React.FC<ReadMoreTemplateProps> = ({
  title,
  shortContent,
  fullContent,
  maxLength = 150,
  className = "",
  buttonClassName = "",
  contentClassName = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shouldShowReadMore = fullContent.length > maxLength;
  const displayContent = isExpanded ? fullContent : shortContent;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`read-more-container ${className}`}>
      {title && (
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
          {title}
        </h3>
      )}
      
      <div className={`content ${contentClassName}`}>
        <p className="text-gray-300 leading-relaxed mb-4">
          {displayContent}
        </p>
        
        {shouldShowReadMore && (
          <button
            onClick={toggleExpanded}
            className={`group/btn flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-all duration-300 ${buttonClassName}`}
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp size={16} className="group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </>
            ) : (
              <>
                <span>Read More</span>
                <ChevronDown size={16} className="group-hover/btn:translate-y-1 transition-transform duration-300" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default ReadMoreTemplate;