"use client";
import { useSession } from "next-auth/react";
import { BrandName } from "@/components/layout/Header";
import { useState } from "react";
import { signOut } from "next-auth/react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { MdSchool } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { TbLogout } from "react-icons/tb";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const router = useRouter();
  const handleProfileClick = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <header className="p-4 py-2 flex fixed top-0 left-0 right-0  z-50 bg-white items-center justify-between md:px-[4%] md:py-4 border-b border-gray-300 shadow">
      <BrandName />
      <Avatar
        src={session?.user?.image || ""}
        alt="profile image"
        onClick={handleProfileClick}
      />
      <Menu
        variant="menu"
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        disableAutoFocusItem
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              borderRadius: 1,
              padding: 0,
            },
          },
        }}
      >
        <MenuItem sx={{ gap: 1, borderBottom: "1px solid #DCDFE0" }}>
          <Avatar
            src={session?.user?.image || ""}
            sx={{ width: 26, height: 26, paddingBottom: 0, marginBottom: 0 }}
          />
          My Account
        </MenuItem>
        <MenuItem onClick={() => router.push("/admin/tutor-applications")}>
          <ListItemIcon>
            <MdSchool size={23} />
          </ListItemIcon>
          Tutor Applications
        </MenuItem>
        <MenuItem onClick={() => router.push("/admin/parent-applications")}>
          <ListItemIcon>
            <GrGroup size={23} />
          </ListItemIcon>
          Parent Applications
        </MenuItem>
        <MenuItem onClick={() => router.push("/admin/dashboard")}>
          <ListItemIcon>
            <RiDashboardLine size={23} />
          </ListItemIcon>
          Dashboard
        </MenuItem>
        <MenuItem
          sx={{ color: "red" }}
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
        >
          <ListItemIcon>
            <TbLogout size={23} color="rgb(240 117 117)" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </header>
  );
}
