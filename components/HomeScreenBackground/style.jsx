export function Underlay() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          pointerEvents: "none",
        }}>
        <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <p
            style={{
              flex: "1 1 0%",
              height: 30,
              fontSize: 30,
              fontWeight: "700",
              lineHeight: "30px",
              color: "white",
              letterSpacing: -2,
            }}>
            
          </p>
          <div style={{ flex: "1 1 0%", display: "flex", gap: "2em" }}></div>
          <p style={{ flex: "1 1 0%", height: 30, fontSize: 30, lineHeight: "30px", textAlign: "right", color: "white" }}>⎑</p>
        </div>
        <div style={{ height: 60 }} />
        <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center" }}>
          <p style={{ flex: "1 1 0%", height: "100%", fontSize: 12, lineHeight: "1em", color: "white" }}>
            <b>Open Sorcerers</b>
            <br />
            A Magical world
            <br />
            <b>—</b>
          </p>
          <div style={{ width: 10 }} />
          <p
            style={{
              transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
              transformOrigin: "right",
              fontSize: 12,
              fontWeight: "700",
              lineHeight: "100%",
              textAlign: "right",
              color: "white",
              whiteSpace: "nowrap",
            }}>
            DRAG POINTER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ●
          </p>
        </div>
        <div style={{ height: 5 }} />
        <div
          className="full"
          style={{
            width: "100%",
            flex: "1 1 0%",
            padding: 0,
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
          }}>
          <p style={{ flex: "1 1 0%", fontSize: 100, lineHeight: "1em", color: "white", margin: 0, letterSpacing: -10 }}>HackToberfest</p>
          <p style={{ flex: "1 1 0%", fontSize: 100, lineHeight: "100%", textAlign: "right", color: "white", margin: 0, letterSpacing: -10 }}>X FirstPR</p>
        </div>
        <div style={{ height:280 }} />
        <div
          style={{
            pointerEvents: "all",
            pointer: "auto",
            width: "100%",
            padding: 0,
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
          }}>
          <p className="full" style={{ whiteSpace: "nowrap", flex: "1 1 0%", fontSize: 12, lineHeight: "1.5em", color: "white" }}>
            <b>Wonders Of Open-Source</b>
            <br />
            Ready For Your First PR??
          </p>
          <div style={{ width: 10 }} />
          <p
            className="full"
            style={{
              flex: "1 1 0%",
              fontSize: 16,
              fontWeight: "700",
              lineHeight: "1em",
              textAlign: "center",
              color: "white",
              letterSpacing: -0.5,
              whiteSpace: "nowrap",
            }}>
           FIRST PR
          </p>
          <div style={{ width: 10 }} />
          <p className="full" style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "white" }}></p>
        </div>
      </div>
    )
  }
  
  export function Overlay() {
    return (
      <div style={{ position: "absolute", bottom: 40, right: 40 }}>
       
      </div>
    )
  }
  