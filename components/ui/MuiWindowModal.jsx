import { Modal, Box } from "@mui/material";

export default function MuiWindowModal({ open, onClose, children }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {/* Main container for both windows */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          bgcolor: "transparent",
        }}
      >
        {/* LEFT WINDOW */}
        <Box
          sx={{
            bgcolor: "#1F2020",
            // bgcolor: "black",
            color: "white",
            borderRadius: 2,
            width: 600,
            height: 620,
            p: 2,
          }}
        >
          {children}
        </Box>

        {/* RIGHT WINDOW */}
        <Box
          sx={{
            bgcolor: "#1F2020",
            color: "white",
            borderRadius: 2,
            width: 250,
            height: 620,
            px: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="text-center">
            <img src="images/leptop.png" alt="" className="w-70 pb-4" />
            <h1>Access your mobile device is here</h1>
            <h1 className="text-center text-gray-300 text-xs pt-2">
              Keep up with your calls, messages, and activity here in the start
              menu.
            </h1>
            <h1 className="font-bold text-center text-sm pt-6">Start device</h1>
            <div className="flex items-center justify-between py-4">
              <button className="bg-[#2a2a2a] hover:bg-[#353535] px-2 py-1 rounded">
                Android <span className="text-xs">TM</span>
              </button>
              <button className="bg-[#2a2a2a] px-2 py-1 rounded hover:bg-[#353535]">
                iPhone
              </button>
            </div>
            <h1 className="text-center text-sky-400 w-fit mx-auto px-2.5 py-1.5 my-3 rounded hover:bg-[#353535] ">
              Hide this pane
            </h1>
          </div>
        </Box>
      </Box>
    </Modal>
  );
}
