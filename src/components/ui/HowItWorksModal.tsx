import { Modal } from "./Modal";
import { HowItWorks } from "../sections/HowItWorks";

export function HowItWorksModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <HowItWorks />
    </Modal>
  );
}
