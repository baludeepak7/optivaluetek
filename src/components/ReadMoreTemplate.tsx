import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ReadMoreTemplateProps {
  title?: string;
  shortContent: string;
  fullContent: string;
  maxLength?: number;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  expandedContentClassName?: string;
  showReadMore?: boolean;
}

const ReadMoreTemplate: React.FC<ReadMoreTemplateProps> = ({
  title,
  shortContent,
  fullContent,
  maxLength = 150,
  className = "",
  buttonClassName = "",
  contentClassName = "",
  titleClassName = "",
  expandedContentClassName = "",
  showReadMore = true
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shouldShowReadMore = showReadMore && fullContent.length > maxLength;
  const displayContent = isExpanded ? fullContent : shortContent;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`read-more-container ${className}`}>
      {title && (
        <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 ${titleClassName}`}>
          {title}
        </h3>
      )}
      
      <div className={`content ${contentClassName}`}>
        <div className={`text-gray-300 leading-relaxed mb-4 ${isExpanded ? expandedContentClassName : ''}`}>
          {displayContent}
        </div>
        
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

// Enhanced version with animation support
export const AnimatedReadMore: React.FC<ReadMoreTemplateProps & { 
  animationDuration?: string;
  gradientColors?: string;
}> = ({
  animationDuration = "duration-300",
  gradientColors = "from-blue-400 to-purple-400",
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shouldShowReadMore = props.showReadMore !== false && props.fullContent.length > (props.maxLength || 150);

  return (
    <div className={`read-more-container ${props.className || ""}`}>
      {props.title && (
        <h3 className={`text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${gradientColors} transition-all ${animationDuration} ${props.titleClassName || ""}`}>
          {props.title}
        </h3>
      )}
      
      <div className={`content ${props.contentClassName || ""}`}>
        <div className={`text-gray-300 leading-relaxed mb-4 transition-all ${animationDuration} ${isExpanded ? `animate-in slide-in-from-top-2 ${animationDuration} ${props.expandedContentClassName || ""}` : ""}`}>
          {isExpanded ? props.fullContent : props.shortContent}
        </div>
        
        {shouldShowReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`group/btn flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-all ${animationDuration} ${props.buttonClassName || ""}`}
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp size={16} className={`group-hover/btn:-translate-y-1 transition-transform ${animationDuration}`} />
              </>
            ) : (
              <>
                <span>Read More</span>
                <ChevronDown size={16} className={`group-hover/btn:translate-y-1 transition-transform ${animationDuration}`} />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

// Card-based version for use in cards/containers
export const CardReadMore: React.FC<ReadMoreTemplateProps & {
  cardClassName?: string;
  borderGradient?: string;
}> = ({
  cardClassName = "",
  borderGradient = "from-blue-500 to-purple-600",
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-500 hover:shadow-xl ${cardClassName}`}>
      <ReadMoreTemplate
        {...props}
        className={`${props.className || ""}`}
        buttonClassName={`w-full justify-center py-3 px-6 bg-gray-700/20 rounded-xl border border-gray-600/30 hover:bg-gray-700/30 ${props.buttonClassName || ""}`}
      />
    </div>
  );
};

export default ReadMoreTemplate;