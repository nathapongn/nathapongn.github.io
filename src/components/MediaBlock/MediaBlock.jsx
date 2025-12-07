// CSS
import "./MediaBlock.css"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import Wrapper from "../../components/Wrapper/Wrapper.jsx"

export default function MediaBlock({
  showLabel = true,
  title = "Title",
  titleSize = "text-xl",
  description = "Description",
  descriptionSize = "text-m",
  mediaType = "image",
  lightSrc,
  darkSrc,
  mirror = false,
  orientation = "horizontal",
  caption,
  alt
}) {

    const { darkMode } = useContext(ThemeContext);

    return (
        <Wrapper>
            <div className={`media-block ${mirror ? "mirror" : ""} ${orientation}`}>
                <div className={`media-wrapper ${mediaType === "video" ? "video" : "image"}`}>
                    {mediaType === "video" ? 
                    <video className="media-video" src={darkMode ? (darkSrc || lightSrc): lightSrc} autoPlay loop muted playsInline /> 
                    : 
                    <img src={darkMode ? (darkSrc || lightSrc): lightSrc} alt={alt} />}
                </div>
                {showLabel ?
                <div className="media-label">
                    {caption != '' && <p className="text-s strong accent">{caption}</p>}
                    <h1 className={`${orientation === "vertical" ? "text-l" : titleSize} text-neutral-primary`}>{title}</h1>
                    <p className={`${descriptionSize} text-neutral-secondary`}>{description}</p>
                </div> : null
                }
            </div>
        </Wrapper>
    )
}

