import { Dispatch, FC, SetStateAction } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type AlertProps = {
  alertOpen: boolean;
  title: string;
  children?: React.ReactNode;
  setAlertOpen: Dispatch<SetStateAction<boolean>>;
  onSubmit: () => void;
  description?: string;
};

const Alert: FC<AlertProps> = ({
  alertOpen,
  setAlertOpen,
  title,
  children,
  onSubmit,
  description,
}) => {
  return (
    <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-8 text-2xl font-bold">
            {title}
          </AlertDialogTitle>
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
          {children}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>İptal</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              onSubmit();
            }}
          >
            Devam
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
