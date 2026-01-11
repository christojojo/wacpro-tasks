import Avatar from "../Avatar/Avatar";

const TaskStatusCard = ({
  avatarSrc,
  TaskName = "",
  priority = "",
  CompletedTaskCount,
}) => {
  const priorityConfig = {
    low: {
      icon: "equal",
      color: "#F2AE3D",
    },
    medium: {
      icon: "keyboard_double_arrow_down",
      color: "#0065CE",
    },
    high: {
      icon: "keyboard_control_key",
      color: "#AE1800",
    },
    urgent: {
      icon: "stat_2",
      color: "#AE1800",
    },
  };
  const currentPriority = priorityConfig[priority?.toLowerCase()];
  return (
    <div className="bg-white rounded-md p-md shadow-cardshadow">
      <div className="font-nmd font-medium text-black mb-nmd leading-4">{TaskName}</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-xs">
          <span className="material-symbols-outlined text-[#3AA7FF] text-mlg">
            task
          </span>
          <span className="text-[#0B3DAB] text-nmd font-medium">PEPSIT-21</span>
        </div>
        <div className="flex items-center space-x-nmd">
          {currentPriority && (
            <div className="flex items-center">
              <span
                className="material-symbols-outlined text-n2xl font-medium"
                style={{ color: currentPriority.color }}
              >
                {currentPriority.icon}
              </span>
            </div>
          )}
          {CompletedTaskCount && (
            <div className="flex items-center bg-grey rounded text-[#89929C] pr-nxs py-[1px]">
              <span className="material-symbols-outlined text-lg">
                list_alt_check
              </span>
              <span className="text-nmd font-medium leading-[16px] pl-n2xs">
                {CompletedTaskCount}
              </span>
            </div>
          )}
          {avatarSrc && <Avatar variant={"sm"} src={avatarSrc} />}
        </div>
      </div>
    </div>
  );
};

export default TaskStatusCard;
