import { Button } from "@/components/ui/button";
import { SignOut, UserInfo } from "./user";
import { CloseIcon } from "@/components/icons";

export const MenuContent = ({
  toggle,
  children,
  desktop = false,
}: {
  toggle?: () => void;
  children: React.ReactNode;
  desktop?: boolean;
}) => (
  <>
    <div className="flex items-center justify-between">
      <UserInfo />
      {desktop === false && (
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={toggle}
          className="mr-2"
        >
          <CloseIcon />
        </Button>
      )}
    </div>
    <div className="mt-4 flex flex-col gap-2">
      <h1 className="text-sm text-muted-foreground mx-4">Collections</h1>
      {children}
    </div>
    <div className="mt-auto mb-2 mx-2">
      <SignOut />
    </div>
  </>
);
