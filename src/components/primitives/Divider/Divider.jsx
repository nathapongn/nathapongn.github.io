export default function Divider({ orientation = 'horizontal', thickness = '1px', color = 'var(--divider)', margin=false}) {
    const style = {
        border: 'none',
        backgroundColor: color
    }

    if (orientation === 'horizontal') {
        style.width = '100%';
        style.height = thickness;
        margin && (style.margin = '1rem 0')
    } else {
        style.width = thickness;
        style.height = '100%';
        style.display = 'inline-block';
    }
    
    return (
        <hr style={style} />
    )
}