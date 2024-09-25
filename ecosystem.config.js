module.exports = {
  apps: [
    {
      name: "blog",
      exec_mode: "fork",
      instances: "1",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      exp_backoff_restart_delay: 100,
      watch: true,
      max_memory_restart: "400M",
    },
  ],
};
