import {
  CirclePlus,
  Cloud,
  Copy,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  ShoppingBasket,
  ShoppingCart,
  Store,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import MyCart from "./MyCart";
import { signOut, useSession } from "next-auth/react";
export default function Account() {
  const session = useSession()
  const adimin = true;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className=" cursor-pointer">Account</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-5">
        {session.status!=='authenticated' && (
          <>
            <DropdownMenuLabel>Create your Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {session.status==='authenticated' && (
          <>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            {session.status!=='authenticated' && <Link href="/login">Login</Link>}
            {session.status==='authenticated' && <Link href="/acount">Profile</Link>}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShoppingCart className="mr-2 h-4 w-4" />
            <MyCart />
            {/* <span>My Cart</span> */}

          </DropdownMenuItem>
          {session.status==='authenticated' && adimin && (
            <>
              <DropdownMenuItem>
                <CirclePlus className="mr-2 h-4 w-4" /><span>Add Product</span>
              </DropdownMenuItem>
            </>
          )}
          <DropdownMenuItem>
            <Store className="mr-2 h-4 w-4" />
            <span>Abote Store</span>
          </DropdownMenuItem>
          <DropdownMenuItem>

            {session.status!=='authenticated' &&
              <><UserPlus className="mr-2 h-4 w-4" /><Link href={"/register"}>Create An Account</Link></>}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <ShoppingBasket className="mr-2 h-4 w-4" />
              <span>Catogery</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Catogery 1</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Catogery 2</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {/* {session&&()} */}
                <DropdownMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  <span>More... </span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {/* {session&&()} */}
                <DropdownMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  <span>Coppy Link </span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        
          {session.status==='authenticated' && (
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
            <button onClick={()=>signOut()}>Log out</button>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
          )}
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
