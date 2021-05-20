import React from "react";

function DockItem(props) {
  return (
    <div className="item">
      <img src={props.url} alt={props.title} />
    </div>
  )
}

class AppFooter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dockIconSize: "64px"
    }
  }

  render() {
    return (
      <>
        <footer>
          <div className="dock">
            <DockItem url="/logos/Excel_64x64.svg" title="Excel" />
            <DockItem url="/logos/Word_64x64.svg" title="Word" />
            <DockItem url="/logos/OneDrive_64x64.svg" title="OneDrive" />
            <DockItem url="/logos/OneNote_64x64.svg" title="OneNote" />
            <DockItem url="/logos/PowerPoint_64x64.svg" title="PowerPoint" />
            <DockItem url="/logos/Skype_64x64.svg" title="Skype" />
          </div>
        </footer>
      </>
    )
  }
}

export default AppFooter;
