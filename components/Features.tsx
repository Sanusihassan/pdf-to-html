import { ToolState } from "@/src/store";
import QuickIcon from "./icons/QuickIcon";
import { BsCloudUpload } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Features = ({ features }: {
    features: { title: string; description: string }[]
}) => {
    const stateShowTool = useSelector(
        (state: { tool: ToolState }) => state.tool.showTool
    );
    useEffect(() => {
        console.log(stateShowTool)
    }, [stateShowTool])
    return (
        <div className={`features${stateShowTool ? "" : " d-none"}`}>
            {features.map(({ title, description }, i) => (
                <div className="feature">
                    {i === 0 ?

                        <QuickIcon className="feature-icon" /> : i === 1 ? <CiLock className="feature-icon" /> : <BsCloudUpload className="feature-icon" />
                    }
                    <div className="title">{title}</div>
                    <p className="description">{description}</p>
                </div>
            ))}
        </div>
    )
}